<?php 
namespace Chicken\Controller;

use Chicken\Data\ComboData;

abstract class ComboController{

    public static function getCombos()
    {
        return ComboData::getCombos();
    }

    public static function getCombo($idcombo)
	{
		return ComboData::getCombo($idcombo);
	}
    
    public static function addCombo($name,$description,$type)
    {
        return ComboData::addCombo($name,$description,$type);
    }

    public static function editCombo($idcombo,$name,$description,$type)
    {
        return ComboData::editCombo($idcombo,$name,$description,$type);
    }

    public static function deleteCombo($idcombo)
    {
        return ComboData::deleteCombo($idcombo);  
    }
}

?>