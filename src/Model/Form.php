<?php
namespace GreenCheap\ContactForm\Model;

use GreenCheap\Database\ORM\Annotation\Column;
use GreenCheap\Database\ORM\Annotation\Entity;
use GreenCheap\Database\ORM\Annotation\Id;
use GreenCheap\Database\ORM\ModelTrait;
use GreenCheap\System\Model\DataModelTrait;
use JetBrains\PhpStorm\ArrayShape;

/**
 * Class Form
 * @package GreenCheap\ContactForm\Model
 * @Entity(tableClass="@contactform_form")
 */
class Form implements \JsonSerializable
{
    use ModelTrait, DataModelTrait;

    const TYPE_MAIL = 0;

    const TYPE_HTTP = 1;

    /**
     * @Id
     * @Column(type="integer")
     */
    public $id;

    /**
     * @Column(type="string")
     */
    public $title;

    /**
     * @Column(type="datetime")
     */
    public $date;

    /**
     * @Column(type="integer")
     */
    public $send_type;

    /**
     * @Column(type="string")
     */
    public $from_address;

    /**
     * @return array
     */
    #[ArrayShape([self::TYPE_MAIL => "mixed", self::TYPE_HTTP => "mixed"])]
    public static function getTypes(): array
    {
        return [
            self::TYPE_MAIL => __('Mail'),
            self::TYPE_HTTP => __('Http')
        ];
    }

    /**
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        return $this->toArray();
    }
}
?>
