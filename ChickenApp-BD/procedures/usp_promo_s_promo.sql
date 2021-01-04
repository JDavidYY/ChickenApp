CREATE DEFINER=`admin`@`%` PROCEDURE `usp_promo_s_promo`()
BEGIN
	IF (SELECT EXISTS(SELECT * FROM Products)) THEN
		SELECT idProducts AS "idProduct" , nameProducts AS "name" , descriptionProducts AS "description" , priceProducts AS "price" , Categories_idCategories AS "categoryid",discountProducts AS "descuento" 
		FROM Products 
		WHERE estateProducts=1;

    END IF;
END