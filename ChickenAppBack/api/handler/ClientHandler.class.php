<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\ClientController;

class ClientHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
	
	public function getClients(Request $request, Response $response, array $args) {
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

    public function addClient(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();
		//$client=$data['client'];
		//$content = $request->getBody();
		$firstname=$data['firstname'];
        $lastname=$data['lastname'];
        $phone=$data['phone'];
        $email=$data['email'];
        $adress=$data['adress'];
		$password=$data['password'];
		
        $result="Error al agregar al cliente";
        /*if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }*/
        ClientController::addClient($firstname,$lastname,$phone,$email,$adress,$password);
       
		 $result="Cliente agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function editClient(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();
		$content = $data['content'];

		$firstname=$args['firstname'];
		$lastname=$args['lastname'];
		$phone=$args['phone'];
		$email=$args['email'];
	
		$result=ClientController::editClient($firstname,$lastname,$phone,$email,$content);
		$result='Cliente actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteClient(Request $request, Response $response, array $args){
        $id=$args["id"];
		$result=ClientController::deleteClient($id);
		$result='Cliente eliminado correctamente';
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