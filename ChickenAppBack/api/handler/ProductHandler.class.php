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
        $name=$data['name'];
        $description=$data['description'];
        $price=$data['price'];
        $categoryid=$data['categoryid'];

        $result="Error al agregar el producto";
        /*if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }*/
        ProductController::addProduct($name,$description,$price,$categoryid);
       
		 $result="Producto agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editProduct(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();
		//$content = $data['content'];

        $productid=$data['productid'];
        $name=$data['name'];
        $description=$data['description'];
        $price=$data['price'];
        $categoryid=$data['categoryid'];
	
		$result=ProductController::editProduct($productid,$name,$description,$price,$categoryid);
		$result='Producto actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteProduct(Request $request, Response $response, array $args){
        $productid=$args["productid"];
		$result=ProductController::deleteProduct($productid);
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