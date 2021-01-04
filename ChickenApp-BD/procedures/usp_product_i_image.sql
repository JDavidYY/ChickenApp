CREATE DEFINER=`admin`@`%` PROCEDURE `usp_product_i_image`(in pidproduct VARCHAR(50),in pfilename VARCHAR(50),in pfileextension VARCHAR(50),in  ptmpfile VARCHAR(50),out oresult INT)
BEGIN

	INSERT INTO Images (idreferenceImages,typeImages,filenameImages,fileextensionImages,tmpImages) 
    VALUES (pidproduct,'product',pfilename,pfileextension,ptmpfile);
    SET oresult=1;
	
END