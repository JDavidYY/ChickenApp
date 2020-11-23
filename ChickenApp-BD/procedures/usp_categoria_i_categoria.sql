CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_i_categoria`(out id int,in nombre varchar(45) ,in descripcion varchar(200),in imagen varchar(150))
BEGIN
	if (SELECT EXISTS(select * from categories where nameCategories=nombre))=false then
		insert into categories (nameCategories,descriptionCategories,imageCategories,estateCategories) values (nombre,descripcion,imagen,1);
		if (SELECT EXISTS(select * from categories where nameCategories=nombre and descriptionCategories=descripcion and estateCategories=1)) then
            select idCategories into id from categories where nameCategories=nombre and descriptionCategories=descripcion and estateCategories=1;
        end if;
	end if;
END