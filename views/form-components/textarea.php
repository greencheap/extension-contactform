<div class="uk-form-controls">
    <textarea id="<?= $field['data']['customId'] ?: $id.$field['data']['name'] ?>" class="<?= $field['data']['class'] ?>" placeholder="<?= $field['data']['placeholder'] ?>" name="<?= $field['data']['name'] ?>" <?= $field['data']['required'] ? 'required':null ?>><?= $field['data']['value'] ?></textarea>
</div>