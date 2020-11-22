<?php 
namespace Chicken\Controller;

use Chicken\Data\ChefData;

abstract class ChefController{

    
    public static function getChefs(){
        return ChefData::getChefs();
    }
    
    public static function addChef($firstname,$lastname,$email,$dni,$phone,$content){
        return ChefData::addChef($firstname,$lastname,$email,$dni,$phone,$content);
    }

    public static function editChef($dni,$firstname,$lastname,$email,$phone,$content){
        return ChefData::editChef($dni,$firstname,$lastname,$email,$phone,$content);
    }

    public static function deleteChef($dni){
        return ChefData::deleteChef($dni);  
    }
	
}
?>