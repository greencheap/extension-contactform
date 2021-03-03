<div class="uk-form-controls">
    <ul class="uk-grid-small" uk-grid>
        <?php foreach($field['data']['buttons'] as $id => $button): ?>
            <li>
                <input type="<?= $button['type'] ?>" value="<?= $button['text'] ?>" class="<?= $button['class'] ?>">
            </li>
        <?php endforeach ?>
    </ul>
</div>