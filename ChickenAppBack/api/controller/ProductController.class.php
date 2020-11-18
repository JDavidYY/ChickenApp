<?php 
namespace Chicken\Controller;

use Chicken\Data\ProductData;

abstract class ProductController{

    
    public static function getProducts(){
        return ProductData::getProducts();
    }
    
    public static function addProduct($name,$description,$price,$categoryid,$content){
        return ProductData::addProduct($name,$description,$price,$categoryid,$content);
    }

    public static function editProduct($productid,$name,$description,$price,$categoryid,$content){
        return ProductData::editProduct($productid,$name,$description,$price,$categoryid,$content);
    }

    public static function deleteProduct($productid){
        return ProductData::deleteProduct($productid);  
    }
	
}
?>