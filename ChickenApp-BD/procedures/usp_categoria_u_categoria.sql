CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_u_categoria`(id int,nombre varchar(45), descripcion varchar(200))
BEGIN
	update categories set nameCategories=nombre,descriptionCategories=descripcion where idCategories=id;
END