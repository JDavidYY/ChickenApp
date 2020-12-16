<?php 
namespace Chicken\Controller;

use Chicken\Data\CategoryData;

abstract class CategoryController{

    
    public static function getCategories(){
        return CategoryData::getCategories();
    }

    public static function getCategory($idcategory)
	{
		return CategoryData::getCategory($idcategory);;
	}
    
    public static function addCategory($name,$description){
        return CategoryData::addCategory($name,$description);
    }

    public static function editCategory($categoryid,$name,$description){
        return CategoryData::editCategory($categoryid,$name,$description);
    }

    public static function deleteCategory($idcategory){
        return CategoryData::deleteCategory($idcategory);  
    }
	
}
?>