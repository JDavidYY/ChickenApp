<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;

abstract class PromoData{

    public static function getPromos(){
        $rtn = null;

        $procedure_name = "usp_promo_s_promo";
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

    public static function getPromo($idpromo)
	{
		$rtn = NULL;

		$procedureName = "usp_promo_f_promo";
		$params =  array(
			new MySqlParameter("pidpromo", $idpromo, 1)
		);

		$db = new DataAccessLayer();
		$db->connect();
		$result = $db->ExecuteSelect($procedureName, $params);
		$db->disconnect();
		
		if (isset($result)) {
			$rtn = $result[0];
		}

		return $rtn;
	}
    
    public static function addPromo($idproduct,$descuento) {
        $rtn = null;

        $procedureName = "usp_promo_i_promo"; 
        $params = array(
                new MySqlParameter("pidproduct", $idproduct, 1),
                new MySqlParameter("pdescuento", $descuento, 1),
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

    public static function editPromo($idpromo,$descuento) {
        $rtn = null;

        $procedureName = "usp_promo_u_promo"; 
        $params = array(
            new MySqlParameter("pidpromo", $idpromo, 1),
            new MySqlParameter("pdescuento", $descuento, 1),
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

    public static function deletePromo($idpromo) {
        $rtn = null;

        $procedureName = "usp_promo_d_promo"; 
        $params = array(
                new MySqlParameter("pidpromo", $idpromo, 1),
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