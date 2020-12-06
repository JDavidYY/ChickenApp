<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;

abstract class PlatoData{

    public static function getPlatos(){
        $rtn = null;

        $procedure_name = "usp_platos_s_platos";
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

    public static function getPlato($idplato)
	{
		$rtn = NULL;

		$procedureName = "usp_plato_f_plato";
		$params =  array(
			new MySqlParameter("pidplato", $idplato, 1)
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
    
    public static function addPlato($name,$description) {
        $rtn = null;

        $procedureName = "usp_plato_i_plato"; 
        $params = array(
                new MySqlParameter("pname", $name, 1),
                new MySqlParameter("pdescription", $description, 1),
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

    public static function editPlato($idplato,$name,$description) {
        $rtn = null;

        $procedureName = "usp_plato_u_plato"; 
        $params = array(
            new MySqlParameter("pidplato", $idplato, 1),
            new MySqlParameter("pname", $name, 1),
            new MySqlParameter("pdescription", $description, 1),
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

    public static function deletePlato($idplato) {
        $rtn = null;

        $procedureName = "usp_plato_d_plato"; 
        $params = array(
                new MySqlParameter("pidplato", $idplato, 1),
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