<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\CategoryController;
use Chicken\Library\Storage;

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
		/*$storage= new Storage();
		$storage->createBucket('mainkra');*/
		return $response;
	}

	public function getCategory(Request $request, Response $response, array $args)
	{
		$idcategory = $args['idCategory'];
		$result = CategoryController::getCategory( $idcategory);
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
		
		//$content = $request->getBody();
		$idcategory=$data['idCategory'];
        $name=$data['name'];
        $description=$data['description'];

		$result="Error al agregar la categoría";
	
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        /*if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}*/
		if($idcategory=='')
		{
			CategoryController::addCategory($name,$description);
		}else{
			CategoryController::editCategory($idcategory,$name,$description);
		}

		$result="Categoría agregada";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editCategory(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

        $categoryid=$data['categoryid'];
        $name=$data['name'];
        $description=$data['description'];
	
		$result=CategoryController::editCategory($categoryid,$name,$description);
		$result='Categoría actualizada correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteCategory(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();

        $idcategory=$data['idCategory'];
		$result=CategoryController::deleteCategory($idcategory);
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