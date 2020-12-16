<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\ChefData;

abstract class ChefController{

    
    public static function getChefs(){
        return ChefData::getChefs();
    }

    public static function getChef( $idchef)
	{
		return ChefData::getChef( $idchef);;
	}
    
    public static function addChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return ChefData::addChef($firstname,$lastname,$phone,$email,$adress,$password_encrypted,$dni,$workshift,$age);
    }

    public static function editChef($idchef,$firstname,$lastname,$phone,$email,$adress,$dni,$workshift,$age){
        return ChefData::editChef($idchef,$firstname,$lastname,$phone,$email,$adress,$dni,$workshift,$age);
    }

    public static function deleteChef($idchef){
        return ChefData::deleteChef($idchef);  
    }

    
	
}
?>