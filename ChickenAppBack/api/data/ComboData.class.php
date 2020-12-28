<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;

abstract class ComboData{

    public static function getCombos(){
        $rtn = null;

        $procedure_name = "usp_combos_s_combos";
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

    public static function getCombo($idcombo)
	{
		$rtn = NULL;

		$procedureName = "usp_combo_f_combo";
		$params =  array(
			new MySqlParameter("pidcombo", $idcombo, 1)
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
    
    public static function addCombo($name,$description,$type) {
        $rtn = null;

        $procedureName = "usp_combo_i_combo"; 
        $params = array(
                new MySqlParameter("pname", $name, 1),
                new MySqlParameter("pdescription", $description, 1),
                new MySqlParameter("ptype", $type, 1),
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

    public static function editCombo($idcombo,$name,$description,$type) {
        $rtn = null;

        $procedureName = "usp_combo_u_combo"; 
        $params = array(
            new MySqlParameter("pidcombo", $idcombo, 1),
            new MySqlParameter("pname", $name, 1),
            new MySqlParameter("pdescription", $description, 1),
            new MySqlParameter("ptype", $type, 1),
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

    public static function deleteCombo($idcombo) {
        $rtn = null;

        $procedureName = "usp_combo_d_combo"; 
        $params = array(
                new MySqlParameter("pidcombo", $idcombo, 1),
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