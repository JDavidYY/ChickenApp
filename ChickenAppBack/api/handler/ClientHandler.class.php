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

	public function getClient(Request $request, Response $response, array $args)
	{
		$idclient = $args['idClient'];
		$result = ClientController::getClient( $idclient);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

    public function addClient(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();
		//$client=$data['client'];
		//$content = $request->getBody();
		$idclient=$data["idClient"];
		$firstname=$data['firstname'];
        $lastname=$data['lastname'];
        $phone=$data['phone'];
        $email=$data['email'];
        $adress=$data['adress'];
		$password=$data['password'];
		
        //$result="Error al agregar al cliente";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		if($idclient=='')
		{
			$result=ClientController::addClient($firstname,$lastname,$phone,$email,$adress,$password);
		}
		else{
			$result=ClientController::editClient($idclient,$firstname,$lastname,$phone,$adress);
		}
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function changePassword(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();
		//$client=$data['client'];
		//$content = $request->getBody();
		$email=$data['email'];
		$password=$data['password'];
		$newpassword=$data['newPassword'];
		
        $result="Error al iniciar sesión";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }
        $result=ClientController::changePassword($email,$password,$newpassword);
       
		 //$result="Inicio de sesión exitoso";
		 if($result!=NULL)
		 {
			$response=self::response($response,TRUE,$result);
		 }
		 else {
			$response=self::response($response,FALSE,$result);
		 }
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