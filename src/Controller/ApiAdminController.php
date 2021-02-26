<?php
namespace GreenCheap\ContactForm\Controller;

use GreenCheap\Application as App;
use GreenCheap\ContactForm\Model\Form;
use JetBrains\PhpStorm\ArrayShape;

/**
 * Class ApiAdminController
 * @package GreenCheap\ContactForm\Controller
 * @Access(admin=true)
 * @Route(name="admin")
 */
class ApiAdminController
{
    /**
     * @Request({"filter":"array", "page":"int"} , csrf=true)
     * @param array $filter
     * @param int $page
     */
    public function indexAction(array $filter = [], int $page = 0): array
    {
        $query = Form::query();
        $filter = array_merge(array_fill_keys(['search', 'order', 'limit'], ''), $filter);

        extract($filter, EXTR_SKIP);

        if($search){
            $query->where(function ($query) use($search){
                $query->orWhere(['title LIKE :search'] , ['search' => "%{$search}%"]);
            });
        }

        if(!preg_match('/^(date|title)\s(asc|desc)$/i', $order, $order)){
            $order = [1 => 'date', 2 => 'desc'];
        }

        $limit = (int) $limit ?: 10;
        $count = $query->count();
        $pages = ceil($count / $limit);
        $page = max(0, min($pages - 1, $page));
        $forms = array_values($query->offset($page * $limit)->limit($limit)->orderBy($order[1], $order[2])->get());

        return compact('forms', 'pages', 'count');
    }

    /**
     * @param array $form
     * @param int $id
     * @return mixed
     * @Request({"form":"array", "id":"integer"}, csrf=true)
     */
    public function saveAction(array $form = [], int $id = 0): mixed
    {
        if(!$query = Form::where(compact('id'))->first()){
            if($id){
                return App::jsonabort(404, __('Not Found Form'));
            }

            $query = Form::create([
                'date' => new \DateTime()
            ]);
        }

        $query->save($form);

        return compact('query');
    }

    /**
     * @Route("/{id}", methods="DELETE", requirements={"id"="\d+"})
     * @Request(csrf=true)
     * @param int $id
     * @return array
     */
    #[ArrayShape(['message' => "string"])]
    public function deleteAction(int $id ): array
    {
        if($form = Form::find($id)){
            $form->delete();
        }

        return ['message' => 'success'];
    }

    /**
     * @Route(methods="POST")
     * @Request({"ids":"array"}, csrf=true)
     * @param array $ids
     * @return string[]
     */
    #[ArrayShape(['message' => "string"])]
    public function copyAction(array $ids = []): array
    {
        foreach($ids as $id){
            if($form = Form::find($id)){
                $form = clone $form;
                $form->id = null;
                $form->title = $form->title. ' - '. __('Copy');
                $form->date = new \DateTime();
                $form->save();
             }
        }

        return ['message' => 'success'];
    }

    /**
     * @Route("/bulk", methods="DELETE")
     * @Request({"ids":"array"}, csrf=true)
     * @param array $ids
     * @return string[]
     */
    #[ArrayShape(['message' => "string"])]
    public function bulkDeleteAction(array $ids = []): array
    {
      foreach(array_filter($ids) as $id){
          $this->deleteAction($id);
      }
      return ['message' => 'success'];
    }
}