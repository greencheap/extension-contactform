<?php
return [
    'install' => function($app)
    {
        $util = $app['db']->getUtility();
        if(!$util->tableExists('@contactform_form')){
            $util->createTable('@contactform_form', function($table){
                $table->addColumn('id', 'integer', ['autoincrement' => true, 'unsigned' => true, 'length' => 10]);
                $table->addColumn('title', 'string');
                $table->addColumn('date', 'datetime');
                $table->addColumn('send_type', 'integer');
                $table->addColumn('from_address', 'string');
                $table->addColumn('data', 'json_array', ['notnull' => false]);
                $table->setPrimaryKey(['id']);
                $table->addIndex(['title'], 'CONTACTFORM_FORM_TITLE');
            });
        }
    },

    'uninstall' => function($app)
    {
        $util = $app['db']->getUtility();

        if($util->tableExists('@contactform_form')){
            $util->dropTable('@contactform_form');
        }
    }
];
?>
