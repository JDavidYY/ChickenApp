export class OrderModel
{
    idOrder:string = "";
    idproducts: string[] = [];
    cantidades: string[] = [];
    types: string[] = [];
    comments: string[] = [];
    typeOrder: string = "";
    idClient: string = "";

    //historial de pedidos
    idpedido:string="";
	preciopedido:string="";
    tipopedido:string="";
    fechapedido:string="";
    estadopedido:string = "";
}
