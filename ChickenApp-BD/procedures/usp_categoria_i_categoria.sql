CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_i_categoria`(id int, nombre varchar(45) ,descripcion varchar(200))
BEGIN
	declare total int;
	select count(*) into total from categories;
	if (SELECT EXISTS(select * from categories where idCategories=id))=false then
		insert into categories (idCategories,nameCategories,descriptionCategories) values (total+1,nombre,descripcion);
	end if;
END