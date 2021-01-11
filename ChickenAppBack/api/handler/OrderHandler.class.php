<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\OrderController;

class OrderHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }

    public function addOrder(Request $request, Response $response, array $args)
	{
		
		$data = (array)$request->getParsedBody();
				
		$idclient=$data['idClient'];
		$typeorder=$data['typeOrder'];
		$idproducts=$data['idproducts'];
        $cantidades=$data['cantidades'];
        $types=$data['types'];
        $comments=$data['comments'];

		$result="Error al agregar la orden";
		
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        
		$result=OrderController::addOrder($idclient,$typeorder,$idproducts,$cantidades,$types,$comments);

		$response=self::response($response,TRUE,$result);
		return $response;
	}

    public function getOrders(Request $request, Response $response, array $args) {
        
		$result=OrderController::getOrders();
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