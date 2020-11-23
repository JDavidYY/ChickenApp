CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_categoria_s_categoria`(in id int,in estado int)
BEGIN
	if (id=0) then
		select * from categories where estateCategories=estado;
	else
		if (SELECT EXISTS(select * from categories where idCategories=id and estateCategories=estado)) then
			select * from categories where idCategories=id and estateCategories=estado;
		else	
			select 'No existe esta categoria';
		end if;
    end if;
END