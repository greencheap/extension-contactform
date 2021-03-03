<?php 
namespace GreenCheap\ContactForm\Controller;

use GreenCheap\Application as App;
use GreenCheap\ContactForm\Model\Form;
use GreenCheap\ContactForm\Messages;
use GreenCheap\Site\Model\Node;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Client;

class SiteController
{
    /**
     * @var System/Mail
     */
    protected $mailConfig;

    /**
     * @var System/Site
     */
    protected $siteConfig;

    public function __construct()
    {
        $this->mailConfig = App::config('system/mail');
        $this->siteConfig = App::config('system/site');
    }

    /**
     * @return array
     */
    public static function indexAction():array
    {
        $page = Node::where('type = ?', ['contact'])->first();
        
        $formId = $page->get('contact.contactFormID');
        $form = Form::where('id = ?', [$formId ?: 0])->first();

        return [
            '$view' => [
                'title' => __('Contact'),
                'name' => 'contactform/contact.php'
            ],
            'page' => $page,
            'form' => $form
        ];
    }

    /**
     * @Route(methods="POST")
     * @Request({"form":"array", "id":"integer"}, csrf=true)
     */
    public function messageServiceAction(array $form = [], int $id = 0)
    {
        $db = App::db();
        $form_query = $db->createQueryBuilder()
        ->from('@contactform_form')
        ->where('id = :id', ['id' => $id])
        ->first();

        if( !$form_query || !$id ){
            return App::jsonabort(404, __('Not Found Form'));
        }
    
        $queryData = json_decode($form_query['data'], true);
        if( $form_query['send_type'] == Form::TYPE_MAIL ){
            
            try {
                $mail = App::mailer()->create();
                $mail->setTo($form_query['from_address'])
                    ->setSubject(__('You have a message from your website (%website%)', ['%website%' => $this->siteConfig->get('title')]))
                    ->setBody(App::view('contactform:views/mail/default.php', compact('form')), 'text/html')
                    ->send();

            } catch (\Exception $e) {
                throw new \Exception($e->getMessage());
            }
        }else{
            $headers = [];
            foreach($queryData['headers'] as $name => $value){
                $headers[$name] = $value;
            }
            $client = new Client();
            $response = $client->request('GET', $form_query['from_address'], $headers, json_encode($form));
            if($response->getStatusCode() != 200){
                return App::jsonabort($response->getStatusCode(), $queryData['messages']['error_send']);
            }
        }

        return [
            'message' => $queryData['messages']['success_send']
        ];
    }
}
?>