<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\DeliveryboyData;

abstract class DeliveryboyController{

    
    public static function getDeliveryboys(){
        return DeliveryboyData::getDeliveryboys();
    }
    
    public static function addDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return DeliveryboyData::addDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password_encrypted,$dni,$workshift,$age);
    }

    public static function editDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return DeliveryboyData::editDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password_encrypted,$dni,$workshift,$age);
    }

    public static function deleteDeliveryboy($dni){
        return DeliveryboyData::deleteDeliveryboy($dni);  
    }
	
}
?>