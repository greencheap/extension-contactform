<div class="uk-form-controls">
    <?php foreach($field['data']['values'] as $id => $checkbox): ?>
        <label class="uk-margin-small uk-display-block">
            <input type="<?= $field['data']['type'] ?>" id="<?= $field['data']['customId'] ?: $id.$field['data']['name'] ?>" name="<?= $field['data']['name'] ?>" value="<?= $checkbox['value'] ?>" class="uk-margin-small-right <?= $field['data']['class'] ?>" <?= $field['data']['required'] ? 'required':null ?>> <span><?= $checkbox['label'] ?></span>
        </label>
    <?php endforeach ?>
</div>