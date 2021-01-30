<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\SalesController;

class SalesHandler
{

    public function getSales(Request $request, Response $response, array $args) {
        
		$result=SalesController::getSales();
		$response=self::response($response,TRUE,$result);
		return $response;
    }

    public function getTopSales(Request $request, Response $response, array $args) {
        
		$result=SalesController::getTopSales();
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