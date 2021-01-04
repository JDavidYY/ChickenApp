CREATE DEFINER=`admin`@`%` PROCEDURE `usp_products_s_products`()
BEGIN
	IF (SELECT EXISTS(SELECT * FROM Products)) THEN
		SELECT idProducts AS "idProduct" , nameProducts AS "name" , descriptionProducts AS "description" , priceProducts AS "price" , Categories_idCategories AS "categoryid" 
		FROM Products 
		WHERE estateProducts=1;
    END IF;
END