<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\ComboController;
use Chicken\Library\Storage;

class ComboHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function getCombos(Request $request, Response $response, array $args) {
        
		$result=ComboController::getCombos();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function selectProducts(Request $request, Response $response, array $args) {
        
		$idcombo = $args['idCombo'];
		$result=ComboController::selectProducts($idcombo);
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getCombo(Request $request, Response $response, array $args)
	{
		$idcombo = $args['idCombo'];
		$result = ComboController::getCombo( $idcombo);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
    public function addCombo(Request $request, Response $response, array $args)
	{
		
		$data = (array)$request->getParsedBody();
				
        $name=$data['name'];
		$description=$data['description'];
		$idproducts=$data['idproducts'];
		$cantidades=$data['cantidades'];

		$result="Error al agregar el combo";
		
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        
		$result=ComboController::addCombo($name,$description,$idproducts,$cantidades);

		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
	public function uploadImage(Request $request, Response $response, array $args)
	{
		$rtn = NULL;

		$data = (array)$request->getParsedBody();
		$idcombo = $data['idCombo']; 
		$files = $request->getUploadedFiles();
		$result="La imagen no se pudo agregar";

		if (!isset($files) || !is_array($files)) {
			$response=self::response($response,FALSE,$result);
			return $app->json($rtn);
		}
		$file = $files['image']; 
		$filename = $file->getClientFilename(); 
		$fileextension = substr($filename, strrpos($filename, '.') + 1);
		$tmpfile = $idcombo . '.' . $fileextension; 
		$storage= new Storage();
		$storage->uploadObject('mainkra','combos/'.$tmpfile,$_FILES['image']['tmp_name']);
		
		$result = ComboController::saveImageCombo($idcombo,$filename,$fileextension,$tmpfile);

		$response=self::response($response,TRUE,$result);
		return $response;
	}
    
    public function editCombo(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();

        $idcombo=$data['idCombo'];
        $name=$data['name'];
		$description=$data['description'];
		$type=$data['type'];
	
		$result=ComboController::editCombo($idcombo,$name,$description,$type);
		$result='Combo actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteCombo(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();

        $idcombo=$data['idCombo'];
		$result=ComboController::deleteCombo($idcombo);
		$result='Combo eliminado correctamente';
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