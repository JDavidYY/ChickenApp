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

    public static function getOrdersChef(){
        $rtn = null;

        $procedure_name = "usp_orders_s_cocinero";
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

    public static function getOrdersDeliveryboy($iddeliveryboy){
        $rtn = null;

        $procedure_name = "usp_orders_s_delivery";
        $params = array(
			new MySqlParameter("piddelivery", $iddeliveryboy, 1)
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

    public static function getOrdersClient($idclient){
        $rtn = null;

        $procedure_name = "usp_orders_s_client";
        $params = array(
			new MySqlParameter("pidclient", $idclient, 1)
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

    public static function getOrdersClientHistory($idclient){
        $rtn = null;

        $procedure_name = "usp_orders_h_client";
        $params = array(
			new MySqlParameter("pidclient", $idclient, 1)
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

    public static function getOrdersAdmin(){
        $rtn = null;

        $procedure_name = "usp_orders_s_admin";
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

    public static function changeStateChef($idorder) {
        $rtn = null;

        $procedureName = "usp_orders_u_cocinero"; 
        $params = array(
            new MySqlParameter("pidorder", $idorder, 1),
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

    public static function changeStateDeliveryboy($idorder) {
        $rtn = null;

        $procedureName = "usp_orders_u_delivery"; 
        $params = array(
            new MySqlParameter("pidorder", $idorder, 1),
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

    public static function changeStateAdmin($idorder) {
        $rtn = null;

        $procedureName = "usp_orders_u_admin"; 
        $params = array(
            new MySqlParameter("pidorder", $idorder, 1),
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