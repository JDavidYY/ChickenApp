<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\PromoController;

class PromoHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function getPromos(Request $request, Response $response, array $args) {
        
		$result=PromoController::getPromos();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getPromo(Request $request, Response $response, array $args)
	{
		$idpromo = $args['idPromo'];
		$result = PromoController::getPromo( $idpromo);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
    public function addPromo(Request $request, Response $response, array $args)
	{
		
		$data = (array)$request->getParsedBody();
				
		$idproduct=$data['idProduct'];
        $descuento=$data['descuento'];

        $result="Error al agregar la promoción";
		if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
		
		PromoController::addPromo($idproduct,$descuento);

		$result="Promoción agregada";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editPromo(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

        $idpromo=$data['idPromo'];
        $descuento=$data['descuento'];
	
		$result=PromoController::editPromo($idpromo,$descuento);
		$result='Promoción actualizada correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deletePromo(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();

        $idproduct=$data['idProduct'];
		$result=PromoController::deletePromo($idproduct);
		$result='Promoción eliminada correctamente';
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