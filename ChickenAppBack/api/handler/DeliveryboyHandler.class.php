<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\DeliveryboyController;

class DeliveryboyHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
	
	public function getDeliveryboys(Request $request, Response $response, array $args) {
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

    public function addDeliveryboy(Request $request, Response $response, array $args)
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
		$firstname=$data['firstname'];
		$lastname=$data['lastname'];
		$phone=$data['phone'];
		$email=$data['email'];
		$password=$data['password'];
		$dni=$data['dni'];
		$workshift=$data['workshift'];
		$age=$data['age'];

        $result="Error al agregar al deliveryboy";
        if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }
        DeliveryboyController::addDeliveryboy($firstname,$lastname,$phone,$email,$password,$dni,$workshift,$age);
       
		 $result="Delivery Boy agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function editDeliveryboy(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

		$firstname=$data['firstname'];
		$lastname=$data['lastname'];
		$phone=$data['phone'];
		$email=$data['email'];
		$password=$data['password'];
		$dni=$data['dni'];
		$workshift=$data['workshift'];
		$age=$data['age'];
	
		$result=DeliveryboyController::editDeliveryboy($firstname,$lastname,$phone,$email,$password,$dni,$workshift,$age);
		$result='Deliveryboy actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteDeliveryboy(Request $request, Response $response, array $args){
        $dni=$args["dni"];
		$result=DeliveryboyController::deleteDeliveryboy($dni);
		$result='Deliveryboy eliminado correctamente';
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