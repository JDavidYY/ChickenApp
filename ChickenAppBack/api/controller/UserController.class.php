<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\UserData;

abstract class UserController{

    
    /*public static function getClients(){
        return ClientData::getClients();
    }*/
    
    public static function loginUser($email,$password){

        $rtn = NULL;
        
        $password_encrypt = UserData::getUserPassword($email);
        $verify = password_verify($password, $password_encrypt);
        if ($verify===TRUE)
		{
			$rtn = UserData::getRol($email);
		}
        
        return $rtn;
    }

    /*public static function editClient($firstname,$lastname,$phone,$email,$content){
        return ClientData::editClient($firstname,$lastname,$phone,$email,$content);
    }

    public static function deleteClient($dni){
        return ClientData::deleteClient($dni);  
    }*/
	
}
?>