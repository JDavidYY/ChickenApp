<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\ChefController;

class ChefHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
	
	public function getChefs(Request $request, Response $response, array $args) {
        /*$client_id=$args['clientid'];
		$customer_id=$args['customerid'];*/
		$data = array(
			'ok' => 'true',
			'result' => 'servicio conectado'
		);
		$payload = json_encode($data);
		$response->getBody()->write($payload);
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(201);
		/*$result=ChefController::getChefs();
		$response=self::response($response,TRUE,$result);
		return $response;*/
	}

    public function addChef(Request $request, Response $response, array $args)
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
		$firstname=$args['firstname'];
		$lastname=$args['lastname'];
		$email=$args['email'];
		$dni=$args['dni'];
		$phone=$args['phone'];

        $result="Error al agregar al cocinero";
        if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }
        ChefController::addChef($firstname,$lastname,$email,$dni,$phone,$content);
       
		 $result="Chef agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function editChef(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();
		$content = $data['content'];

		$dni=$args['dni'];
		$firstname=$args['firstname'];
		$lastname=$args['lastname'];
		$email=$args['email'];
		$phone=$args['phone'];
	
		$result=ChefController::editChef($dni,$firstname,$lastname,$email,$phone,$content);
		$result='Chef actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteChef(Request $request, Response $response, array $args){
        $dni=$args["dni"];
		$result=ChefController::deleteChef($dni);
		$result='Chef eliminado correctamente';
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