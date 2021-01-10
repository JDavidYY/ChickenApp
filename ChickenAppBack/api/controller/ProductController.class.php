<?php 
namespace Chicken\Controller;

use Chicken\Data\ProductData;

abstract class ProductController{

    
    public static function selectProduct(){
        return ProductData::selectProduct();
    }

    public static function selectProductByCategory($idcategory){
        return ProductData::selectProductByCategory($idcategory);
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
		return ProductData::saveImageProduct($idproduct , $filename, $fileextension, $tmpfile);
    }
    
    public static function getImage($idproduct)
	{
		$rtn = ProductData::getImage($idproduct);
		return $rtn;
    }
    
    public static function editImageProduct($idproduct,$filename){
        return ProductData::editImageProduct($idproduct,$filename);
    }

    public static function deleteProduct($idproduct){
        return ProductData::deleteProduct($idproduct);  
    }
	
}
?>