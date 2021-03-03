<?php

use GreenCheap\ContactForm\Model\Form;

return [
    'name' => 'contactform',

    'autoload' => [
        'GreenCheap\\ContactForm\\' => 'src'
    ],

    'menu' => [
        'contactform' => [
            'label' => 'Form',
            'priority' => 115,
            'icon' => 'contactform:icon.svg',
            'url' => '@contactform/admin',
            'active' => '@contactform/admin*'
        ]
    ],

    'nodes' => [
        'contact' => [
            'label' => 'Contact',
            'name' => '@contact',
            'controller' => 'GreenCheap\\ContactForm\\Controller\\SiteController::indexAction',
            'frontpage' => true,
            'protected' => true
        ]
    ],

    'widgets' => [
        'widgets/form.php'
    ],

    'routes' => [
        'contactform' => [
            'name' => '@contactform',
            'controller' => [
                'GreenCheap\\ContactForm\\Controller\\AdminController',
                'GreenCheap\\ContactForm\\Controller\\SiteController'
            ]
        ],
        'api/contactform' => [
            'name' => '@api/contactform',
            'controller' => [
                'GreenCheap\\ContactForm\\Controller\\ApiAdminController'
            ]
        ]
    ],

    'events' => [
        'view.system/site/admin/edit' => function($event, $view) use ($app)
        { 
            $view->script('contact-settings', 'contactform:app/bundle/node-settings.js', ['site-edit']);

            $db = $app['db'];

            $forms = $db->createQueryBuilder()
            ->select(['id', 'title'])
            ->from('@contactform_form')
            ->get();

            $view->data('$contactform', $forms);
        }
    ]
];
