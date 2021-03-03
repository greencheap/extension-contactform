<?php 

use GreenCheap\ContactForm\Model\Form;

return [
    'name' => 'contactform/form',

    'label' => 'Contact Form',

    'events' => [
        'view.layout' => function($event, $view) use ($app)
        {
            if(!$app->isAdmin()){
                return;
            }

            $db = $app['db'];
            $forms = $db->createQueryBuilder()
            ->select(['id', 'title'])
            ->from('@contactform_form')
            ->get();

            $view->data('$contact_forms', $forms);
        },

        'view.scripts' => function($event, $scripts) use ($app)
        {
            $scripts->register('widget-form', 'contactform:app/bundle/widget-form.js', ['~widgets']);
        }
    ],

    'render' => function($widget) use ($app)
    {
        $form = Form::find($widget->get('formType'));
        return $app->view('contactform/widget-form.php' , compact('form'));
    }
];
?>