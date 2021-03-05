<?php
namespace GreenCheap\ContactForm\Controller;

use GreenCheap\Application as App;
use GreenCheap\ContactForm\Messages;
use GreenCheap\ContactForm\Model\Form;
use GreenCheap\Routing\Annotation\Route;
use GreenCheap\User\Annotation\Access;
use JetBrains\PhpStorm\ArrayShape;

/**
 * @Access(admin=true)
 * @Route("/", name="admin/")
 */
class AdminController
{
    /**
     * GreenCheap Kernel Mail Config
     * @var object
     */
    protected object $system_mail;

    public function __construct()
    {
        $this->system_mail = App::config('system/mail');
    }

    /**
     * @param array $filter
     * @param int $page
     * @return array
     * @Request({"filter":"array", "page":"integer"})
     */
    #[ArrayShape(['$view' => "string[]", '$data' => "array[]"])]
    public function indexAction(array $filter = [], int $page = 0):array
    {
        return [
            '$view' => [
                'title' => __('Forms List'),
                'name' => 'contactform:views/admin/index.php'
            ],
            '$data' => [
                'config' => [
                    'filter' => (object) $filter,
                    'page' => (int) $page
                ],
                'types' => Form::getTypes()
            ]
        ];
    }

    /**
     * @Route("/edit")
     * @Request({"id":"integer"})
     * @param int $id
     * @return mixed
     */
    #[ArrayShape(['$view' => "string[]", '$data' => "array"])]
    public function editAction(int $id = 0): mixed
    {
        if(!$query = Form::where(compact('id'))->first()){
            if($id){
                return App::abort(404, __('Not found form'));
            }
            $query = Form::create([
                'date' => new \DateTime(),
                'send_type' => Form::TYPE_MAIL,
                'from_address' => $this->system_mail->get('from_address'),
                'data' => [
                    'fields' => [],
                    'messages' => [
                        'success_send' => Messages::getSuccessSend(),
                        'error_send' => Messages::getErrorSend(),
                        'error_validation' => Messages::getErrorValidation(),
                        'error_invalid' => Messages::getErrorInvalid()
                    ]
                ]
            ]);
        }

        return [
            '$view' => [
                'title' => '',
                'name' => 'contactform:views/admin/edit.php'
            ],
            '$data' => [
                'form' => $query,
                'data' => [
                    'types' => Form::getTypes(),
                    'isSmtp' => $this->system_mail->get('username') ? true:false
                ]
            ]
        ];
    }
}
