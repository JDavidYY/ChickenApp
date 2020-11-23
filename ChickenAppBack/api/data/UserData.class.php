<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;
abstract class UserData{
    
    public static function getUserPassword($email) {
		$rtn = null;
		
		$procedureName = "usp_user_s_password";
		$params = array(
				new MySqlParameter("pemail", $email, 1),
				new MySqlParameter("oresult", '', 2)
			);
		$db = new DataAccessLayer();
		$db->connect();
		$result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
		$db->disconnect();
		if (isset($result))
		{
			$rtn = $result["oresult"];
		}
		
		return $rtn;
    }

    public static function getRol($email) {
		$rtn = null;
		
		$procedureName = "usp_user_s_rol";
		$params = array(
				new MySqlParameter("pemail", $email, 1),
				new MySqlParameter("oresult", '', 2)
			);
		$db = new DataAccessLayer();
		$db->connect();
		$result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
		$db->disconnect();
		if (isset($result))
		{
			$rtn = $result["oresult"];
		}
		
		return $rtn;
    }

}
?>