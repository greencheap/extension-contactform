<section>
    <?php if($page->get('contact.main.iframeMap')): ?>
        <div class="uk-margin">
            <iframe src="<?= $page->get('contact.main.iframeMap') ?>" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    <?php endif ?>

    <div class="uk-margin uk-grid-match" uk-grid>
        <div class="<?= $form ? 'uk-width-1-2@m':'uk-width-expand' ?>">
            <div class="uk-card uk-card-primary uk-card-body">
                <h1><?= $page->get('contact.main.name') ?></h1>
                <ul class="uk-list">
                    <?php if($page->get('contact.main.email')): ?>
                        <li>
                            <span><?= __('Email') ?>:</span>
                            <a href="mailto:<?= $page->get('contact.main.email') ?>" target="_blank" rel="nofollow"><?= $page->get('contact.main.email') ?></a>
                        </li>
                    <?php endif ?>

                    <?php if($page->get('contact.main.phone')): ?>
                        <li>
                        <span><?= __('Phone') ?>:</span>
                            <a href="tel:<?= $page->get('contact.main.phone') ?>" target="_blank" rel="nofollow"><?= $page->get('contact.main.phone') ?></a>
                        </li>
                    <?php endif ?>

                    <?php if($page->get('contact.main.fax')): ?>
                        <li>
                            <span><?= __('Fax') ?>:</span>
                            <?= $page->get('contact.main.fax') ?>
                        </li>
                    <?php endif ?>

                    <?php if($page->get('contact.main.taxNumber')): ?>
                        <li>
                            <span><?= __('Tax Number') ?>:</span>
                            <?= $page->get('contact.main.taxNumber') ?>
                        </li>
                    <?php endif ?>

                    <?php if($page->get('contact.main.taxOffice')): ?>
                        <li>
                            <span><?= __('Tax Office') ?>:</span>
                            <?= $page->get('contact.main.taxOffice') ?>
                        </li>
                    <?php endif ?>

                    <?php if($page->get('contact.main.address')): ?>
                        <li>
                            <span><?= __('Address') ?>:</span>
                            <?= $page->get('contact.main.address') ?>
                        </li>
                    <?php endif ?>
                </ul>
            </div>
        </div>
        <?php if($form): ?>
            <div class="uk-width-1-2@m">
                <?= $view->render('contactform/widget-form.php' , compact('form')); ?>
            </div>
        <?php endif ?>
    </div>
</section>