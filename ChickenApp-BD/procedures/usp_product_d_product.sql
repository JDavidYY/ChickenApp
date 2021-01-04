CREATE DEFINER=`admin`@`%` PROCEDURE `usp_product_d_product`(in pproductid INT,out oresult INT)
BEGIN
	IF (SELECT EXISTS(SELECT * FROM Products WHERE idProducts=pproductid AND estateProducts=1)) THEN
		UPDATE Products 
		SET estateProducts=0 
		WHERE idProducts=pproductid;
		SET oresult=1;
	END IF;
END