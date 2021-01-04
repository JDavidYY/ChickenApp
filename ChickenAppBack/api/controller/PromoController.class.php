<?php 
namespace Chicken\Controller;

use Chicken\Data\PromoData;

abstract class PromoController{

    public static function getPromos()
    {
        return PromoData::getPromos();
    }

    public static function getPromo($idpromo)
	{
		return PromoData::getPromo($idpromo);
	}
    
    public static function addPromo($idproduct,$descuento)
    {
        return PromoData::addPromo($idproduct,$descuento);
    }

    public static function editPromo($idpromo,$descuento)
    {
        return PromoData::editPromo($idpromo,$descuento);
    }

    public static function deletePromo($idpromo)
    {
        return PromoData::deletePromo($idpromo);  
    }
}

?>