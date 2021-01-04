CREATE DEFINER=`admin`@`%` PROCEDURE `usp_product_i_product`(in pname VARCHAR(45),in pdescription VARCHAR(200),in pprice VARCHAR(150),in  pcategoryid INT,out oresult INT)
BEGIN
	IF (SELECT EXISTS(select * from Products where nameProducts=pname))=false then
		INSERT INTO Products (nameProducts,descriptionProducts,priceProducts,Categories_idCategories,estateProducts) 
		VALUES (pname,pdescription,pprice,pcategoryid,1);
		SET oresult=1;
	END IF;
END