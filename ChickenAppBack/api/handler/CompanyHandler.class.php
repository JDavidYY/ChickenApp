<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\CompanyController;
use Chicken\Library\Storage;

class CompanyHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
	}
	
	public function changeAvailability(Request $request, Response $response, array $args)
	{
		$result=CompanyController::changeAvailability();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getState(Request $request, Response $response, array $args)
	{
		$result=CompanyController::getState();
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