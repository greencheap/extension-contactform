<?php
namespace GreenCheap\ContactForm\Controller;

use GreenCheap\Application as App;
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
     * @return array
     */
    public function indexAction():array
    {
        return [];
    }

    /**
     * @Route("/edit/")
     * @Route("/edit/{id}")
     * @param int $id
     * @return mixed
     */
    #[ArrayShape(['$view' => "string[]", '$data' => "array"])]
    public function editAction(int $id = 0):mixed
    {
        if(!$query = Form::where(compact('id'))->first()){
            if($id){
                return App::abort(404, __('Not found form'));
            }
            $query = Form::create([
                'date' => new \DateTime(),
                'data' => [
                    'fields' => []
                ]
            ]);
        }

        return [
            '$view' => [
                'title' => '',
                'name' => 'contactform:views/admin/edit.php'
            ],
            '$data' => [
                'form' => $query
            ]
        ];
    }
}
