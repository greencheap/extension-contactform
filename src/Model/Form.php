<?php
namespace GreenCheap\ContactForm\Model;

use GreenCheap\Database\ORM\Annotation\Column;
use GreenCheap\Database\ORM\Annotation\Entity;
use GreenCheap\Database\ORM\Annotation\Id;
use GreenCheap\Database\ORM\ModelTrait;
use GreenCheap\System\Model\DataModelTrait;

/**
 * Class Form
 * @package GreenCheap\ContactForm\Model
 * @Entity(tableClass="@contactform_form")
 */
class Form implements \JsonSerializable
{
    use ModelTrait, DataModelTrait;

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
     * @inheritDoc
     */
    public function jsonSerialize()
    {
        return $this->toArray();
    }
}
?>
