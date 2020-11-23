<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;
abstract class DeliveryboyData{

    public static function getDeliveryboys(){
        $rtn = null;

        $procedure_name = "usp_deliveryboys_s_deliveryboys";
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
    
    public static function addDeliveryboy($firstname,$lastname,$phone,$email,$password,$dni,$workshift,$age) {
        $rtn = null;

        $procedureName = "usp_deliveryboy_i_deliveryboy"; 
        $params = array(
                new MySqlParameter("pfirstname", $firstname, 1),
                new MySqlParameter("plastname", $lastname, 1),
                new MySqlParameter("pphone", $phone, 1),
                new MySqlParameter("pemail", $email, 1),
                new MySqlParameter("ppassword", $password, 1),
                new MySqlParameter("pdni", $dni, 1),
                new MySqlParameter("pworkshift", $workshift, 1),
                new MySqlParameter("pages", $age, 1),
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

    public static function editDeliveryboy($firstname,$lastname,$phone,$email,$password,$dni,$workshift,$age) {
        $rtn = null;

        $procedureName = "usp_deliveryboy_u_deliveryboy"; 
        $params = array(
            new MySqlParameter("pfirstname", $firstname, 1),
            new MySqlParameter("plastname", $lastname, 1),
            new MySqlParameter("pphone", $phone, 1),
            new MySqlParameter("pemail", $email, 1),
            new MySqlParameter("ppassword", $password, 1),
            new MySqlParameter("pdni", $dni, 1),
            new MySqlParameter("pworkshift", $workshift, 1),
            new MySqlParameter("pages", $age, 1),
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

    public static function deleteDeliveryboy($dni) {
        $rtn = null;

        $procedureName = "usp_deliveryboy_d_deliveryboy"; 
        $params = array(
                new MySqlParameter("pdni", $dni, 1),
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