<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\ClientData;

abstract class ClientController{

    
    /*public static function getClients(){
        return ClientData::getClients();
    }*/
    
    public static function addClient($firstname,$lastname,$phone,$email,$adress,$password){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return ClientData::addClient($firstname,$lastname,$phone,$email,$adress,$password_encrypted);
    }

    /*public static function editClient($firstname,$lastname,$phone,$email,$content){
        return ClientData::editClient($firstname,$lastname,$phone,$email,$content);
    }

    public static function deleteClient($dni){
        return ClientData::deleteClient($dni);  
    }*/
	
}
?>