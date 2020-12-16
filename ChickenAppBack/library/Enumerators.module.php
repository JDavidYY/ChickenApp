<?php
namespace Library\Enumerators;

abstract class LanguageCode {
    const es = 1;
    const en = 2;
}

abstract class Client {
    const CENTRUM               = 1;
    const CENTRUM_DEV           = 2;
    const CENTRUM_PROD           = 3;
    const CENTRUM_DEMO           = 4;
}

abstract class Recipient {
    //const CENTRUM               = '165406736918547';
    const CENTRUM_DEV           = '198815507369245';
    const CENTRUM_PROD           = '165406736918547';
    const CENTRUM_DEMO           = '198815507369245';//'198815507369245';
}

abstract class Platform {
    const Telegram = 1;
    const Facebook = 2;
    const Web      = 3;      
    //const Line     = 3;
    //const Skype    = 4;
    //const Whatsapp = 5;
    //const Other1   = 6;
    //const Other2   = 7;
}

abstract class TicketStatus {
    const Created   = 1;
    const Assigned  = 2;
    const InProcess = 3;
    const Resolved  = 4;
    const Closed    = 5;
}

abstract class MessageType {
    const None     = 0;
    const Customer = 1;
    const Support  = 2;
}

abstract class CreatedBy {
    const None     = 0;
    const Customer = 1;
    const Support  = 2;
}

abstract class ActionType {
    const Create   = 1;
    const Message  = 2;
    const Close    = 3;
}

abstract class CustomerStatus {
    const Inactive = 0;
    const Active   = 1;
}

abstract class AttachmentType {
    const Text     = 1;
    const Image    = 2;
    const Audio    = 3;
    const Video    = 4;
    const File     = 5;
    const Location = 6;
}

?>