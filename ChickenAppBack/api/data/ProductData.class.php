<?php 
namespace Chicken\Data;
use Chicken\Library\DataAccessLayer;
use Chicken\Library\MySqlParameter;
abstract class ProductData{

    public static function selectProduct(){
        $rtn = null;

        $procedure_name = "usp_products_s_products";
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
    
    public static function getProduct($idproduct)
	{
		$rtn = NULL;

		$procedureName = "usp_product_f_product";
		$params =  array(
			new MySqlParameter("pidproduct", $idproduct, 1)
		);

		$db = new DataAccessLayer();
		$db->connect();
		$result = $db->ExecuteSelect($procedureName, $params);
		$db->disconnect();
		
        if (isset($result))
        {
			$rtn = $result[0];
		}

		return $rtn;
    }
    
    public static function addProduct($name,$description,$price,$idcategory) {
        $rtn = null;

        $procedureName = "usp_product_i_product"; 
        $params = array(
                new MySqlParameter("pname", $name, 1),
                new MySqlParameter("pdescription", $description, 1),
                new MySqlParameter("pprice", $price, 1),
                new MySqlParameter("pcategoryid", $idcategory, 1),
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

    public static function saveImageProduct($idproduct , $filename, $fileextension, $tmpfile)
	{
		$rtn = null;

		$procedureName = "usp_product_i_image";
		$params = array(
			new MySqlParameter("pidproduct", $idproduct, 1),
			new MySqlParameter("pfilename", $filename, 1),
			new MySqlParameter("pfileextension", $fileextension, 1),
			new MySqlParameter("ptmpfile", $tmpfile, 1),
			new MySqlParameter("oresult", 0, 2)
		);

		$db = new MySqlHelper();
		$db->connect();
		$result = $db->ExecuteNonQueryWithOutput($procedureName, $params);
		$db->disconnect();
		$output = 0;
		if (isset($result)) {
			$output = $result["oresult"];
		}
		$rtn = $output;

		return $rtn;
	}

    public static function editProduct($idproduct,$name,$description,$price,$idcategory) {
        $rtn = null;

        $procedureName = "usp_product_u_product"; 
        $params = array(
            new MySqlParameter("pproductid", $idproduct, 1),
            new MySqlParameter("pname", $name, 1),
            new MySqlParameter("pdescription", $description, 1),
            new MySqlParameter("price", $price, 1),
            new MySqlParameter("pcategoryid", $idcategory, 1),
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

    public static function deleteProduct($idproduct) {
        $rtn = null;

        $procedureName = "usp_product_d_product"; 
        $params = array(
                new MySqlParameter("pproductid", $idproduct, 1),
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