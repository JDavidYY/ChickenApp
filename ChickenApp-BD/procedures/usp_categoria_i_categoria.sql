CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_i_categoria`(out id int,in nombre varchar(45) ,in descripcion varchar(200))
BEGIN
	if (SELECT EXISTS(select * from categories where nameCategories=nombre))=false then
		insert into categories (nameCategories,descriptionCategories,estateCategories) values (nombre,descripcion,1);
		if (SELECT EXISTS(select * from categories where nameCategories=nombre and descriptionCategories=descripcion and estateCategories=1)) then
			select 'Se realizo la operacion';
            select idCategories into id from categories where nameCategories=nombre and descriptionCategories=descripcion and estateCategories=1;
        else
			select 'No se realizo la operacion';
            set id=-1;
        end if;
	else	
		select 'Ya existe esta categoria';
        select idCategories into id from categories where nameCategories=nombre;
	end if;
END