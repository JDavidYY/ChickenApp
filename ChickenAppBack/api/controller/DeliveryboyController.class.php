<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\DeliveryboyData;

abstract class DeliveryboyController{

    
    public static function getDeliveryboys(){
        return DeliveryboyData::getDeliveryboys();
    }

    public static function getDeliveryboy( $iddeliveryboy)
	{
		return DeliveryboyData::getDeliveryboy( $iddeliveryboy);
    }
    
    public static function changeAvailability($iddeliveryboy){
        return DeliveryboyData::changeAvailability($iddeliveryboy);
    }
    
    public static function addDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return DeliveryboyData::addDeliveryboy($firstname,$lastname,$phone,$email,$adress,$password_encrypted,$dni,$workshift,$age);
    }

    public static function editDeliveryboy($iddeliveryboy,$firstname,$lastname,$phone,$email,$adress,$dni,$workshift,$age){
        return DeliveryboyData::editDeliveryboy($iddeliveryboy,$firstname,$lastname,$phone,$email,$adress,$dni,$workshift,$age);
    }

    public static function deleteDeliveryboy($iddeliveryboy){
        return DeliveryboyData::deleteDeliveryboy($iddeliveryboy);  
    }
	
}
?>