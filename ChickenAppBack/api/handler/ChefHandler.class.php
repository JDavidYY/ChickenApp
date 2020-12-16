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
		$result=ChefController::getChefs();
		$response=self::response($response,TRUE,$result);
		return $response;
		/*$result=ChefController::getChefs();
		$response=self::response($response,TRUE,$result);
		return $response;*/
	}

	public function getChef(Request $request, Response $response, array $args)
	{
		$idchef = $args['idChef'];
		$result = ChefController::getChef( $idchef );
		$response=self::response($response,TRUE,$result);
		return $response;
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
		
		//$content = $request->getBody();
		$idchef=$data['idChef'];
		$firstname=$data['firstname'];
		$lastname=$data['lastname'];
		$phone=$data['phone'];
		$email=$data['email'];
		$adress=$data['adress'];
		$password=$data['password'];
		$dni=$data['dni'];
		$workshift=$data['workshift'];
		$age=$data['age'];

        $result="Error al agregar al cocinero";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		
		if($idchef=='')
		{
			ChefController::addChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age);
			
		}else
		{
			ChefController::editChef($idchef,$firstname,$lastname,$phone,$email,$adress,$dni,$workshift,$age);
		}
       
		 $result="Chef agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function editChef(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

		$firstname=$data['firstname'];
		$lastname=$data['lastname'];
		$phone=$data['phone'];
		$email=$data['email'];
		$adress=$data['adress'];
		$password=$data['password'];
		$dni=$data['dni'];
		$workshift=$data['workshift'];
		$age=$data['age'];
		$chefid=$data['chefid'];
	
		$result=ChefController::editChef($firstname,$lastname,$phone,$email,$adress,$password,$dni,$workshift,$age,$chefid);
		$result='Chef actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteChef(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();

        $idchef=$data['idChef'];
		$result=ChefController::deleteChef($idchef);
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