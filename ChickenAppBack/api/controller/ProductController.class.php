<?php 
namespace Chicken\Controller;

use Chicken\Data\ProductData;

abstract class ProductController{

    
    public static function getProducts(){
        return ProductData::getProducts();
    }
    
    public static function getProduct($idproduct)
	{
		return ProductData::getProduct($idproduct);
    }
    
    public static function addProduct($name,$description,$price,$idcategory){
        return ProductData::addProduct($name,$description,$price,$idcategory);
    }

    public static function saveImageProduct($idproduct , $filename, $fileextension, $tmpfile)
	{
		return MaintenanceData::saveImageProduct($idproduct , $filename, $fileextension, $tmpfile);
    }

    public static function editProduct($idproduct,$name,$description,$price,$idcategory){
        return ProductData::editProduct($idproduct,$name,$description,$price,$idcategory);
    }

    public static function deleteProduct($idproduct){
        return ProductData::deleteProduct($idproduct);  
    }
	
}
?>