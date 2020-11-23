<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

require __DIR__. '/vendor/autoload.php';
/*include __DIR__.'/libs/sendgrid-google-php/SendGrid/Mail.php';
include __DIR__.'/libs/sendgrid-google-php/SendGrid/SendGrid.php';*/

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Exception\HttpNotFoundException;
use Slim\Factory\AppFactory;

include __DIR__."/library/Enumerators.module.php";
include __DIR__."/library/SecurityExtensions.module.php";
//include __DIR__."/library/EmailExtensions.module.php";
include __DIR__."/library/CommonExtensions.module.php";
include __DIR__."/library/MySqlExtensions.module.php";

/*include __DIR__."/common/v1/data/DataAccessLayer.class.php";
include __DIR__."/common/v1/data/ChatData.class.php";
include __DIR__."/common/v1/data/ChatFirebase.class.php";
include __DIR__."/common/v1/data/ChatFacebook.class.php";
include __DIR__."/common/v1/data/CustomerData.class.php";
include __DIR__."/common/v1/data/ClientData.class.php";
include __DIR__."/common/v1/data/FeedData.class.php";
include __DIR__."/common/v1/data/TicketData.class.php";

include __DIR__.'/common/v1/controller/ChatController.class.php';
include __DIR__.'/common/v1/controller/ChatFacebookController.class.php';
include __DIR__.'/common/v1/controller/CustomerController.class.php';*/


$app = AppFactory::create();

//$app->setBasePath('/api');

//$app->addBodyParsingMiddleware(); // JSON body
require __DIR__.'/config/middleware.php';
require __DIR__.'/config/routes.php';
require __DIR__.'/config/routes-api.php';

//require __DIR__.'/config/routes-webhook.php';

//$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function ($request, $response) {
    //throw new HttpNotFoundException($request);
//});

//if (Odo\Library\GlobalConstants::FlagDevelopment == TRUE)
//{
//$app['debug'] = true;
//}
$app->run();

?>