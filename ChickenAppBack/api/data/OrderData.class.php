<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;

abstract class OrderData{

    public static function getOrders(){
        $rtn = null;

        $procedure_name = "usp_orders_s_orders";
        $params = NULL;

        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteSelect($procedure_name, $params);
        $db->disconnect();
        $output = 0;
        if (isset($result)) 
        {
			$output = $result;
		}
		$rtn = $output;

		return $rtn;

    }

    public static function addOrder($typeorder,$idclient) {
        $rtn = null;

        $procedureName = "usp_orders_i_orders"; 
        $params = array(
                new MySqlParameter("pidclient", $idclient, 1),
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

        $procedureName = "usp_orders_i_product"; 
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

    public static function selectProducts($idorder){
        $rtn = null;

        $procedure_name = "usp_orders_f_orders";
        $params = array(
			new MySqlParameter("pidorder", $idorder, 1)
		);

        $db = new DataAccessLayer();
        $db->connect();
        $result = $db->ExecuteSelect($procedure_name, $params);
        $db->disconnect();
        $output = 0;
        if (isset($result)) 
        {
			$output = $result;
		}
		$rtn = $output;

		return $rtn;

    }

}
?>