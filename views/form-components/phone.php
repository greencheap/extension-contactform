<div class="uk-form-controls">
    <input type="<?= $field['data']['type'] ?>" id="<?= $field['data']['customId'] ?: $id.$field['data']['name'] ?>" class="<?= $field['data']['class'] ?>" placeholder="<?= $field['data']['placeholder'] ?>" name="<?= $field['data']['name'] ?>" value="<?= $field['data']['value'] ?>" <?= $field['data']['required'] ? 'required':null ?>>
</div>