CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_d_categoria`(id int)
BEGIN
	delete from categories where idCategories=id;
END