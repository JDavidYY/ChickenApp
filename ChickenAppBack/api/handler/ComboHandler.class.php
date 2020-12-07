<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\PlatoController;
/*
class PlatoHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function getPlatos(Request $request, Response $response, array $args) {
        
		$result=PlatoController::getPlatos();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getPlato(Request $request, Response $response, array $args)
	{
		$idplato = $args['idPlato'];
		$result = PlatoController::getPlato( $idplato);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
    public function addPlato(Request $request, Response $response, array $args)
	{
		
		$data = (array)$request->getParsedBody();
		
		
		$idplato=$data['idPlato'];
        $name=$data['name'];
        $description=$data['description'];

        $result="Error al agregar la plato";
        
		if($idplato=='')
		{
			PlatoController::addPlato($name,$description);
		}else{
			PlatoController::editPlato($idplato,$name,$description);
		}

		$result="Plato agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
    }
    
    public function editPlato(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

        $platoid=$data['platoid'];
        $name=$data['name'];
        $description=$data['description'];
	
		$result=PlatoController::editPlato($platoid,$name,$description);
		$result='Plato actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deletePlato(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();

        $idplato=$data['idPlato'];
		$result=PlatoController::deletePlato($idplato);
		$result='Plato eliminado correctamente';
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
*/
?>