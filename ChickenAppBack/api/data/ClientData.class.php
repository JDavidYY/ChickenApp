<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;
abstract class ClientData{

    public static function getClients(){
        $rtn = null;

        $procedure_name = "usp_clients_s_clients";
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
    
    public static function addClient($firstname,$lastname,$phone,$email,$adress,$password) {
        $rtn = null;

        $procedureName = "usp_client_i_client"; 
        $params = array(
                new MySqlParameter("pfirstname", $firstname, 1),
                new MySqlParameter("plastname", $lastname, 1),
                new MySqlParameter("pphone", $phone, 1),
                new MySqlParameter("pemail", $email, 1),
                new MySqlParameter("padress", $adress, 1),
                new MySqlParameter("ppassword", $password, 1),
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

    public static function editClient($dni,$firstname,$lastname,$email,$phone) {
        $rtn = null;

        $procedureName = "usp_chef_u_chef"; 
        $params = array(
            new MySqlParameter("dni", $dni, 1),
            new MySqlParameter("pfirstname", $firstname, 1),
            new MySqlParameter("plastname", $lastname, 1),
            new MySqlParameter("email", $email, 1),
            new MySqlParameter("phone", $phone, 1),
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

    public static function changePassword($email, $newpassword) {
        $rtn = null;

        $procedureName = "usp_client_u_password"; 
        $params = array(
            new MySqlParameter("pemail", $email, 1),
            new MySqlParameter("pnewpassword", $newpassword, 1),
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