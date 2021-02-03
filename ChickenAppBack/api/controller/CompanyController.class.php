<?php 
namespace Chicken\Controller;

use Chicken\Data\CompanyData;

abstract class CompanyController{

    public static function changeAvailability(){
        return CompanyData::changeAvailability();
    }

    public static function getState(){
        return CompanyData::getState();
    }
}
?>
