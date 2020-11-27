<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\ChefData;

abstract class ChefController{

    
    public static function getChefs(){
        return ChefData::getChefs();
    }
    
    public static function addChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return ChefData::addChef($firstname,$lastname,$phone,$email,$adress,$password_encrypted,$dni,$workshift,$age);
    }

    public static function editChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return ChefData::editChef($firstname,$lastname,$phone,$email,$adress,$password_encrypted,$dni,$workshift,$age);
    }

    public static function deleteChef($dni){
        return ChefData::deleteChef($dni);  
    }
	
}
?>