<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;
abstract class ChefData{

    public static function getChefs(){
        $rtn = null;

        $procedure_name = "usp_chefs_s_chefs";
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
    
    public static function addChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age) {
        $rtn = null;

        $procedureName = "usp_chef_i_chef"; 
        $params = array(
                new MySqlParameter("pfirstname", $firstname, 1),
                new MySqlParameter("plastname", $lastname, 1),
                new MySqlParameter("pphone", $phone, 1),
                new MySqlParameter("pemail", $email, 1),
                new MySqlParameter("padress", $adress, 1),
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

    public static function editChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age) {
        $rtn = null;

        $procedureName = "usp_chef_u_chef"; 
        $params = array(
            new MySqlParameter("pfirstname", $firstname, 1),
            new MySqlParameter("plastname", $lastname, 1),
            new MySqlParameter("pphone", $phone, 1),
            new MySqlParameter("pemail", $email, 1),
            new MySqlParameter("padress", $adress, 1),
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

    public static function deleteChef($dni) {
        $rtn = null;

        $procedureName = "usp_chef_d_chef"; 
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