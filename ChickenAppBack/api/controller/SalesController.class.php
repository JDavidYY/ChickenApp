<?php 
namespace Chicken\Controller;

use Chicken\Data\SalesData;

abstract class SalesController{

    public static function getSales()
    {
        return SalesData::getSales();
    }

    public static function getTopSales()
    {
        return SalesData::getTopSales();
    }

}
?>