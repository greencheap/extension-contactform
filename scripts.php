<?php
return [
    'install' => function($app)
    {
        $util = $app['db']->getUtility();
    },

    'uninstall' => function($app)
    {
        $util = $app['db']->getUtility();
    },

    'enable' => function($app)
    {
        $util = $app['db']->getUtility();

        if(!$util->tableExists('@contactform_form')){
            $util->createTable('@contactform_form', function($table){
                $table->addColumn('id', 'integer', ['autoincrement' => true, 'unsigned' => true, 'length' => 10]);
                $table->addColumn('title', 'string');
                $table->addColumn('date', 'datetime');
                $table->addColumn('send_type', 'integer');
                $table->addColumn('to_who', 'string');
                $table->addColumn('data', 'json_array', ['notnull' => false]);
            });
        }
    },

    'update' => function($app)
    {

    }
];
?>
