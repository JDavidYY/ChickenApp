CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_u_categoria`(inout id int,in nombre varchar(45),in descripcion varchar(200))
BEGIN
	if (SELECT EXISTS(select * from categories where idCategories=id and estateCategories=1)) then
		update categories set nameCategories=nombre,descriptionCategories=descripcion where idCategories=id;
        if (SELECT EXISTS(select * from categories where idCategories=id and nameCategories=nombre and descriptionCategories=descripcion)) then
			select 'Se realizo la operacion';
            select idCategories into id from categories where idCategories=id and nameCategories=nombre and descriptionCategories=descripcion;
        else
			select 'No se realizo la operacion';
            set id=-1;
        end if;
	else 
		select 'No existe esta categoria';
        set id=-2;
	end if;
END