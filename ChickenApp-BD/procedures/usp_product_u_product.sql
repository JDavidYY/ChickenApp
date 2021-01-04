CREATE DEFINER=`admin`@`%` PROCEDURE `usp_product_u_product`(in pproductid int,in pname varchar(45),in pdescription varchar(200),in pprice varchar(150),in pcategoryid int,out oresult int)
BEGIN
	IF (SELECT EXISTS(SELECT  * FROM Products WHERE idProducts=pproductid AND estateProducts=1)) THEN
		UPDATE Products 
		SET nameProducts=pname,descriptionProducts=pdescription,priceProducts=pprice,Categories_idCategories=pcategoryid 
		WHERE idProducts=pproductid;
        SET oresult=1;
	END IF;
END