<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\ProductController;

class ProductHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function getProducts(Request $request, Response $response, array $args) {
        /*$client_id=$args['clientid'];
        $customer_id=$args['customerid'];*/
		$result=ProductController::getProducts();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getProduct(Request $request, Response $response, array $args)
	{
		$idproduct = $args['idProduct'];
		$result = ProductController::getProduct( $idproduct);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
    
    public function addProduct(Request $request, Response $response, array $args)
	{
		/*$data = array(
			'ok' => 'true',
			'result' => 'servicio conectado'
		);
		$payload = json_encode($data);
		$response->getBody()->write($payload);
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(201);*/

		$data = (array)$request->getParsedBody();
		
		//$content = $request->getBody();
		$idproduct=$data["idProduct"];
        $name=$data['name'];
        $description=$data['description'];
		$price=$data['price'];
		$idcategory=$data['idCategory'];
        //$categoryid=$data['categoryid'];

        $result="Error al agregar el producto";
        /*if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }*/
		if($idproduct=='')
		{
			ProductController::addProduct($name,$description,$price,$idcategory);
		}else{
			ProductController::editProduct($idproduct,$name,$description,$price,$idcategory);
		}
		       
		$result="Producto agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editProduct(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();
		
        $idproduct=$data["idProduct"];
        $name=$data['name'];
        $description=$data['description'];
		$price=$data['price'];
		$idcategory=$data['idCategory'];
        //$categoryid=$data['categoryid'];
	
		$result=ProductController::editProduct($idproduct,$name,$description,$price,$idcategory);
		$result='Producto actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteProduct(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();
		
		$idproduct=$data["idProduct"];
		$result=ProductController::deleteProduct($idproduct);
		$result='Producto eliminado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
	}

    public static function response(Response $response ,$ok,$result){
		$data = array(
			'ok' => $ok,
			'result' => $result
		);
		$payload = json_encode($data);
		$response->getBody()->write($payload);
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(201);
	}
}
?>