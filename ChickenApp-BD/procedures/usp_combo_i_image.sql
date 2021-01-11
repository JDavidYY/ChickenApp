CREATE DEFINER=`admin`@`%` PROCEDURE `usp_combo_i_image`(in pidcombo varchar(50),in pfilename varchar(50),in pfileextension varchar(50),in  ptmpfile varchar(50),out oresult int)
BEGIN

	insert into Images (idreferenceImages,typeImages,filenameImages,fileextensionImages,tmpImages) values (pidcombo,'combo',pfilename,pfileextension,ptmpfile);
    set oresult=1;

END