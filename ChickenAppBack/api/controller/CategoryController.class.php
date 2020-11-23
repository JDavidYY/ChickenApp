<?php 
namespace Chicken\Controller;

use Chicken\Data\CategoryData;

abstract class CategoryController{

    
    public static function getCategories(){
        return CategoryData::getCategories();
    }
    
    public static function addCategory($name,$description,$content){
        return CategoryData::addCategory($name,$description,$content);
    }

    public static function editCategory($categoryid,$name,$description,$content){
        return CategoryData::editCategory($categoryid,$name,$description,$content);
    }

    public static function deleteCategory($categoryid){
        return CategoryData::deleteCategory($categoryid);  
    }
	
}
?>