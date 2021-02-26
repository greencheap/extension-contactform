<?php
namespace GreenCheap\ContactForm;

final class Messages
{
    const SUCCESS_SEND      = 'Your message has been sent to us, we will get back to you shortly.';
    const ERROR_SEND        = 'Your message could not be sent, we apologize for this problem. Try again soon';
    const ERROR_VALIDATION  = 'You have to fill in all fields.';
    const ERROR_INVALID     = 'You have entered an invalid information, please enter the required information correctly in this field.';

    /**
     * @return string
     */
    public static function getSuccessSend() :string
    {
        return __(self::SUCCESS_SEND);
    }

    /**
     * @return string
     */
    public static function getErrorSend() :string
    {
        return __(self::ERROR_SEND);
    }

    /**
     * @return string
     */
    public static function getErrorValidation() :string
    {
        return __(self::ERROR_VALIDATION);
    }

    /**
     * @return string
     */
    public static function getErrorInvalid() :string
    {
        return __(self::ERROR_INVALID);
    }
}