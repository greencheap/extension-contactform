<?php $view->data('$contactform', [
    'id' =>  $form->id,
    'title' => $form->title,
    'send_type' => $form->send_type,
    'fields' => $form->get('fields'),
    'messages' => $form->get('messages'),
    'formId' => "contactform{$form->id}",
    'formName' => "contactform{$form->id}"
]) ?>
<?= $view->script('contactform-library', 'contactform:app/lib/formlibrary.js') ?>

<form id='<?= "contactform{$form->id}" ?>' name='<?= "contactform{$form->id}" ?>' onsubmit="onSubmit()">
    <?php $view->token()->get() ?>
    <?php foreach($form->get('fields') as $id => $field): ?>
        <div class="uk-margin">
            <?php if($field['component'] != 'Buttons'): ?>
                <label class="uk-form-label"><?= $field['title'] ?></label>
            <?php endif ?>
            <?php 
                $contactval = compact('field', 'id');
            ?>
            <?= 
                match($field['component']){
                    'InputType' => $view->render('contactform/form-components/input.php', $contactval),
                    'RadioType' => $view->render('contactform/form-components/radio.php', $contactval),
                    'CheckboxType' => $view->render('contactform/form-components/checkbox.php', $contactval),
                    'PhoneType' => $view->render('contactform/form-components/phone.php', $contactval),
                    'TextareaType' => $view->render('contactform/form-components/textarea.php', $contactval),
                    'Buttons' => $view->render('contactform/form-components/button.php', $contactval),
                    default => $view->render('contactform/form-components/input.php', $contactval)
                };
            ?>
        </div>
    <?php endforeach ?>

    <div id="contactformError" class="uk-alert-danger" uk-alert hidden>
        <h3><?= __('Error') ?></h3>
        <p id="contactformErrorMessage"></p>  
    </div>

    <div id="contactformSuccess" class="uk-alert-success" uk-alert hidden>
        <h3><?= __('Success') ?></h3>
        <p id="contactformSuccessMessage"></p>  
    </div>
</form>