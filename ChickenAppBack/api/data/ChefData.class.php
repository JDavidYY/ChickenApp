<?php 
namespace Chicken\Data;
use Common\Data\DataAccessLayer;
use Common\Data\MySqlParameter;
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
    
    public static function addChef($firstname,$lastname,$email,$dni,$phone,$content) {
        $rtn = null;

        $procedureName = "usp_chef_i_chef"; 
        $params = array(
                new MySqlParameter("pfirstname", $firstname, 1),
               new MySqlParameter("plastname", $lastname, 1),
               new MySqlParameter("email", $email, 1),
               new MySqlParameter("dni", $dni, 1),
               new MySqlParameter("phone", $phone, 1),
               new MySqlParameter("pcontent", $content, 1),
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

    public static function editChef($dni,$firstname,$lastname,$email,$phone,$content) {
        $rtn = null;

        $procedureName = "usp_chef_u_chef"; 
        $params = array(
            new MySqlParameter("dni", $dni, 1),
            new MySqlParameter("pfirstname", $firstname, 1),
            new MySqlParameter("plastname", $lastname, 1),
            new MySqlParameter("email", $email, 1),
            new MySqlParameter("phone", $phone, 1),
            new MySqlParameter("pcontent", $content, 1),
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