<?php 
namespace Chicken\Controller;

use \SecurityExtensions;
use Chicken\Data\ClientData;
use Chicken\Data\UserData;

abstract class ClientController{

    
    /*public static function getClients(){
        return ClientData::getClients();
    }*/

    public static function getClient($idclient)
	{
		return ClientData::getClient($idclient);
    }
    
    public static function addClient($firstname,$lastname,$phone,$email,$adress,$password){
        $password_encrypted = SecurityExtensions::encrypt($password);
        return ClientData::addClient($firstname,$lastname,$phone,$email,$adress,$password_encrypted);
    }

    public static function editClient($idclient,$firstname,$lastname,$phone,$adress){
        return ClientData::editClient($idclient,$firstname,$lastname,$phone,$adress);
    }

    public static function changePassword($email,$password,$newpassword){

        $rtn = NULL;
        
        $password_encrypt = UserData::getUserPassword($email);
        $verify = password_verify($password, $password_encrypt);
        if ($verify===TRUE)
		{
            $newpassword_encrypted = SecurityExtensions::encrypt($newpassword);
            $rtn = ClientData::changePassword($email, $newpassword_encrypted);
		}
        
        return $rtn;
    }


    /*public static function deleteClient($dni){
        return ClientData::deleteClient($dni);  
    }*/
	
}
?>