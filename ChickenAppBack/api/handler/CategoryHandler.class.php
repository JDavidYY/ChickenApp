<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\CategoryController;

class CategoryHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function getCategories(Request $request, Response $response, array $args) {
        /*$client_id=$args['clientid'];
        $customer_id=$args['customerid'];*/
		$result=CategoryController::getCategories();
		$response=self::response($response,TRUE,$result);
		return $response;
	}
    
    public function addCategory(Request $request, Response $response, array $args)
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
		$content = $data['content'];
		
		//$content = $request->getBody();
        $name=$args['name'];
        $description=$args['description'];

        $result="Error al agregar la categoría";
        if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }
        CategoryController::addCategory($name,$description,$content);
       
		$result="Categoría agregada";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editCategory(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();
		$content = $data['content'];

        $categoryid=$args['categoryid'];
        $name=$args['name'];
        $description=$args['description'];
	
		$result=CategoryController::editCategory($categoryid,$name,$description,$content);
		$result='Categoría actualizada correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteCategory(Request $request, Response $response, array $args){
        $categoryid=$args["categoryid"];
		$result=CategoryController::deleteCategory($categoryid);
		$result='Categoría eliminada correctamente';
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