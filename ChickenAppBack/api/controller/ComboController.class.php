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
    
    public static function selectProducts($idcombo)
	{
		return ComboData::selectProducts($idcombo);
	}
    
    public static function addCombo($name,$description,$idproducts,$cantidades)
    {
        $rtn = null;

        $idcombo = ComboData::addCombo($name,$description);
        if($idcombo>0){
            for($i=0;$i<count($idproducts);$i++){
            $rtn = ComboData::addProduct($idcombo,$idproducts[$i],$cantidades[$i]);
            }
        }

        return $rtn;

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