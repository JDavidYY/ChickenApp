CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_u_categoria`(inout id int,in nombre varchar(45),in descripcion varchar(200),in imagen varchar(150))
BEGIN
	if (SELECT EXISTS(select * from categories where idCategories=id and estateCategories=1)) then
		update categories set nameCategories=nombre,descriptionCategories=descripcion,imageCategories=imagen where idCategories=id;
        if (SELECT EXISTS(select * from categories where idCategories=id and nameCategories=nombre and descriptionCategories=descripcion)) then
            select idCategories into id from categories where idCategories=id and nameCategories=nombre and descriptionCategories=descripcion;
        end if;
	end if;
END