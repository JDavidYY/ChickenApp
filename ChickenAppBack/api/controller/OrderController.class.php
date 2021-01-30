<?php 
namespace Chicken\Controller;

use Chicken\Data\OrderData;

abstract class OrderController{

    public static function addOrder($idclient,$typeorder,$idproducts,$cantidades,$types,$comments)
    {
        $rtn = null;

        $idorder = OrderData::addOrder($idclient,$typeorder);
        if($idorder>0){
            for($i=0;$i<count($idproducts);$i++){
            $rtn = OrderData::addProduct($idorder,$idproducts[$i],$cantidades[$i],$types[$i],$comments[$i]);
            }
        }

        return $idorder;

    }

    public static function getOrders()
    {
        return OrderData::getOrders();
    }

    public static function getOrdersChef()
    {
        return OrderData::getOrdersChef();
    }

    public static function getOrdersDeliveryboy($iddeliveryboy)
    {
        return OrderData::getOrdersDeliveryboy($iddeliveryboy);
    }

    public static function getOrdersClient($idclient)
    {
        return OrderData::getOrdersClient($idclient);
    }

    public static function getOrdersClientHistory($idclient)
    {
        return OrderData::getOrdersClientHistory($idclient);
    }

    public static function getOrdersAdmin()
    {
        return OrderData::getOrdersAdmin();
    }

    public static function changeStateChef($idorder){
        return OrderData::changeStateChef($idorder);
    }

    public static function changeStateDeliveryboy($idorder){
        return OrderData::changeStateDeliveryboy($idorder);
    }

    public static function changeStateAdmin($idorder){
        return OrderData::changeStateAdmin($idorder);
    }

    public static function selectProducts($idorder)
	{
		return OrderData::selectProducts($idorder);
	}
}

?>