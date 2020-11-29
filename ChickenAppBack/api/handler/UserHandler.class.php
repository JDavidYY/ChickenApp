<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\ClientController;

class UserHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }

    public function loginUser(Request $request, Response $response, array $args)
	{

		$data = (array)$request->getParsedBody();
		//$client=$data['client'];
		//$content = $request->getBody();
		$email=$data['email'];
        $password=$data['password'];
		
        $result="Error al iniciar sesión";
        if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }
        UserController::login($email,$password);
       
		 $result="Inicio de sesión exitoso";
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