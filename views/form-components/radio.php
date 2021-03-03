<div class="uk-form-controls">
    <?php foreach($field['data']['values'] as $id => $radio): ?>
        <label class="uk-margin-small uk-display-block">
            <input type="<?= $field['data']['type'] ?>" id="<?= $field['data']['customId'] ?: $id.$field['data']['name'] ?>" name="<?= $field['data']['name'] ?>" class="uk-margin-small-right <?= $field['data']['class'] ?>" value="<?= $radio['value'] ?>" <?= $field['data']['required'] ? 'required':null ?>> <span><?= $radio['label'] ?></span>
        </label>
    <?php endforeach ?>
</div>