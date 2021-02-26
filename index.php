<?php
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

    'routes' => [
        'contactform' => [
            'name' => '@contactform',
            'controller' => [
                'GreenCheap\\ContactForm\\Controller\\AdminController'
            ]
        ],
        'api/contactform' => [
            'name' => '@api/contactform',
            'controller' => [
                'GreenCheap\\ContactForm\\Controller\\ApiAdminController'
            ]
        ]
    ]
];
