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

	public function selectProducts(Request $request, Response $response, array $args){
		$idorder=$args['idOrder'];
		$result=OrderController::selectProducts($idorder);
		
		if(empty($result))
		{
			$response=self::response($response,FALSE,$result);
		}
		else
		{
			$response=self::response($response,TRUE,$result);
		}
		
		return $response;
	}

    public function getOrders(Request $request, Response $response, array $args) {
        
		$result=OrderController::getOrders();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getOrdersChef(Request $request, Response $response, array $args) {
        
		$result=OrderController::getOrdersChef();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getOrdersDeliveryboy(Request $request, Response $response, array $args) {
        
		$iddeliveryboy=$args['idDeliveryboy'];
		$result=OrderController::getOrdersDeliveryboy($iddeliveryboy);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getOrdersClient(Request $request, Response $response, array $args) {
        
		$idclient=$args['idClient'];
		$result=OrderController::getOrdersClient($idclient);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getOrdersClientHistory(Request $request, Response $response, array $args) {
        
		$idclient=$args['idClient'];
		$result=OrderController::getOrdersClientHistory($idclient);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getOrdersAdmin(Request $request, Response $response, array $args) {
        
		$result=OrderController::getOrdersAdmin();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function changeStateChef(Request $request, Response $response, array $args)
	{
		$data = (array)$request->getParsedBody();
				
		$idorder=$data['idOrder'];

		$result="Error al cambiar de estado";
		
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        
		$result=OrderController::changeStateChef($idorder);

		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function changeStateDeliveryboy(Request $request, Response $response, array $args)
	{
		$data = (array)$request->getParsedBody();
				
		$idorder=$data['idOrder'];

		$result="Error al cambiar de estado";
		
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        
		$result=OrderController::changeStateDeliveryboy($idorder);

		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function changeStateAdmin(Request $request, Response $response, array $args)
	{
		$data = (array)$request->getParsedBody();
				
		$idorder=$data['idOrder'];

		$result="Error al cambiar de estado";
		
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        
		$result=OrderController::changeStateAdmin($idorder);

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