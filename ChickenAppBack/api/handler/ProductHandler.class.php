<?php
namespace Chicken\Handler;

use Slim\Psr7\Request;
use Slim\Psr7\Response;

use Chicken\Controller\ProductController;

class ProductHandler
{
    private $responder;

	public function __construct($responder)
	{
		$this->responder = $responder;
    }
    
    public function selectProduct(Request $request, Response $response, array $args) {
        /*$client_id=$args['clientid'];
        $customer_id=$args['customerid'];*/
		$result=ProductController::selectProduct();
		$response=self::response($response,TRUE,$result);
		return $response;
	}

	public function getProduct(Request $request, Response $response, array $args)
	{
		$idproduct = $args['idProduct'];
		$result = ProductController::getProduct( $idproduct);
		$response=self::response($response,TRUE,$result);
		return $response;
	}
    
    public function addProduct(Request $request, Response $response, array $args)
	{
		/*$data = array(
			'ok' => 'true',
			'result' => 'servicio conectado'
		);
		$payload = json_encode($data);
		$response->getBody()->write($payload);
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(201);*/

		$data = (array)$request->getParsedBody();
		
		//$content = $request->getBody();
		$idproduct=$data["idProduct"];
        $name=$data['name'];
        $description=$data['description'];
		$price=$data['price'];
		$idcategory=$data['categoryid'];
        //$categoryid=$data['categoryid'];

		$result="Error al agregar el producto";
        if(!isset($data)){
            $response=self::response($response,FALSE,$result);
            return $response; 
		}
        /*if(!isset($content)){
            $response=self::response($response,FALSE,$result);
            return $response; 
        }*/
		if($idproduct=='')
		{
			$result = ProductController::addProduct($name,$description,$price,$idcategory);
		}else{
			$result = ProductController::editProduct($idproduct,$name,$description,$price,$idcategory);
		}
		       
		//$result="Producto agregado";
		$response=self::response($response,TRUE,$result);
		return $response;
	}
	
	public function uploadImage(Request $request, Response $response, array $args)
	{
		$rtn = NULL;

		$data = (array)$request->getParsedBody();
		$idproduct = $data['idProduct']; 
		$files = $request->getUploadedFiles();
		$result="La imagen no se pudo agregar";
		if (!isset($files) || !is_array($files)) {
			$response=self::response($response,FALSE,$result);
			/*$rtn = array(
				'ok' => FALSE,
				'err' => array(
					'code' => 100,
					'message' => "no image"
				)
			);
			//return $app->json($rtn);
			$response->getBody()->write(json_encode($rtn));
			return $response
				->withHeader('Content-Type', 'application/json')
				->withStatus(200);*/
		}
		$file = $files['image']; //$file = $request->files->get('image');
		$filename = $file->getClientFilename(); //$filename = $file->getClientOriginalName();
		$fileextension = substr($filename, strrpos($filename, '.') + 1);
		$tmpfile = $idproduct . '.' . $fileextension; //$tmpfile = date('YmdHis') . '.' . $fileextension;
		//$path = __DIR__ .'/../images/product/';
		$storage= new Storage();
		$storage->uploadObject('mainkra','xd/'.$tmpfile,$file);
		//$file->moveTo($path . $tmpfile); //$file->move($tmppath, $tmpfile);

		
		$result = ProductController::saveImageProduct($idproduct,$filename,$fileextension,$tmpfile);

		//$result="Imagen de producto agregada correctamente";
		$response=self::response($response,TRUE,$result);
		return $response;
		/*$rtn = array(
			'ok' => ($result > 0),
			'result' => $result
		);
		
		//return $app->json($rtn);
		$response->getBody()->write(json_encode($rtn));
		return $response
			->withHeader('Content-Type', 'application/json')
			->withStatus(200);*/
	}
    
    public function editProduct(Request $request, Response $response, array $args){

		$data = (array)$request->getParsedBody();
		
        $idproduct=$data["idProduct"];
        $name=$data['name'];
        $description=$data['description'];
		$price=$data['price'];
		$idcategory=$data['idCategory'];
        //$categoryid=$data['categoryid'];
	
		$result=ProductController::editProduct($idproduct,$name,$description,$price,$idcategory);
		$result='Producto actualizado correctamente';
		$response=self::response($response,TRUE,$result);
		return $response;
		
	}

	public function deleteProduct(Request $request, Response $response, array $args){
		$data = (array)$request->getParsedBody();
		
		$idproduct=$data["idProduct"];
		$result=ProductController::deleteProduct($idproduct);
		$result='Producto eliminado correctamente';
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