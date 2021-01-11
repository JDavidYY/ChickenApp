<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;

abstract class OrderData{

    public static function addOrder($typeorder) {
        $rtn = null;

        $procedureName = "usp_order_i_order"; 
        $params = array(
                new MySqlParameter("ptypeorder", $typeorder, 1),
                new MySqlParameter("oresult", 0, 2)
           );
        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
        $db->disconnect();
        if (isset($result)) {
           $rtn = $result["oresult"];
        }

        return $rtn;
    }

    public static function addProduct($idorder,$idproduct,$cantidad,$type,$comment) {
        $rtn = null;

        $procedureName = "usp_order_i_product"; 
        $params = array(
            new MySqlParameter("pidorder", $idorder, 1),
            new MySqlParameter("pidproduct", $idproduct, 1),
            new MySqlParameter("pcantidad", $cantidad, 1),
            new MySqlParameter("ptype", $type, 1),
            new MySqlParameter("pcomment", $comment, 1),
            new MySqlParameter("oresult", 0, 2)
            );
        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
        $db->disconnect();
        if (isset($result)) {
            $rtn = $result["oresult"];
        }

        return $rtn;
    }

}
?>