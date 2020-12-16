<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;
abstract class CategoryData{

    public static function getCategories(){
        $rtn = null;

        $procedure_name = "usp_categories_s_categories";
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

    public static function getCategory($idcategory)
	{
		$rtn = NULL;

		$procedureName = "usp_category_f_category";
		$params =  array(
			new MySqlParameter("pidcategory", $idcategory, 1)
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
    
    public static function addCategory($name,$description) {
        $rtn = null;

        $procedureName = "usp_category_i_category"; 
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

    public static function editCategory($idcategory,$name,$description) {
        $rtn = null;

        $procedureName = "usp_category_u_category"; 
        $params = array(
            new MySqlParameter("pidcategory", $idcategory, 1),
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

    public static function deleteCategory($idcategory) {
        $rtn = null;

        $procedureName = "usp_category_d_category"; 
        $params = array(
                new MySqlParameter("pidcategory", $idcategory, 1),
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