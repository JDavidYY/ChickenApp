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
}

?>