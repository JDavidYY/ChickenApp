<?php

// BEGIN : Data ///////////////////////////////////////////////
include __DIR__.'/../api/data/ChefData.class.php';
include __DIR__.'/../api/data/DeliveryboyData.class.php';
include __DIR__.'/../api/data/ClientData.class.php';
include __DIR__.'/../api/data/CategoryData.class.php';
include __DIR__.'/../api/data/UserData.class.php';
include __DIR__.'/../api/data/ProductData.class.php';
include __DIR__.'/../api/data/ComboData.class.php';
include __DIR__.'/../api/data/PromoData.class.php';

/* include __DIR__.'/../api/v3/data/MaintenanceData.class.php';
include __DIR__.'/../api/v3/data/TagData.class.php'; */
//include "data/CustomerData.class.php";
//include "data/TicketData.class.php";
//include "data/TicketMessageData.class.php";
//include "data/MessageData.class.php";
//include "data/MetaData.class.php";
//include "data/ErrorData.class.php";
//include "data/SubscriptionData.class.php";
//include "data/ReportData.class.php";
//include 'data/ExcelReportData.class.php';
//include 'data/CampaingData.class.php';
//include 'data/TagData.class.php';
//include 'data/QuickAnswerData.class.php';
//include 'data/WebServiceConnectData.class.php';
// END : Data ///////////////////////////////////////////////

// BEGIN : Controller ///////////////////////////////////////

include __DIR__.'/../api/controller/ChefController.class.php';
include __DIR__.'/../api/controller/DeliveryboyController.class.php';
include __DIR__.'/../api/controller/ClientController.class.php';
include __DIR__.'/../api/controller/CategoryController.class.php';
include __DIR__.'/../api/controller/UserController.class.php';
include __DIR__.'/../api/controller/ProductController.class.php';
include __DIR__.'/../api/controller/ComboController.class.php';
include __DIR__.'/../api/controller/PromoController.class.php';


/* include __DIR__.'/../api/v3/controller/MaintenanceController.class.php';
include __DIR__.'/../api/v3/controller/TagController.class.php'; */
//include 'controller/TicketController.class.php';
// END : Controller ///////////////////////////////////////

// BEGIN : Handler ///////////////////////////////////////
include __DIR__.'/../api/handler/ChefHandler.class.php';
include __DIR__.'/../api/handler/DeliveryboyHandler.class.php';
include __DIR__.'/../api/handler/ClientHandler.class.php';
include __DIR__.'/../api/handler/CategoryHandler.class.php';
include __DIR__.'/../api/handler/UserHandler.class.php';
include __DIR__.'/../api/handler/ProductHandler.class.php';
include __DIR__.'/../api/handler/ComboHandler.class.php';
include __DIR__.'/../api/handler/PromoHandler.class.php';

/* include __DIR__.'/../api/v3/handler/CustomerHandler.class.php';
include __DIR__.'/../api/v3/handler/MaintenanceHandler.class.php';
include __DIR__.'/../api/v3/handler/TagHandler.class.php'; */
//include __DIR__.'/../api/v3/handler/TicketHandler.class.php';
//include __DIR__.'/../api/v3/handler/UserHandler.class.php';
//include __DIR__.'/../api/v3/handler/NewsletterHandler.class.php';
//include __DIR__.'/../api/v3/handler/CustomTagHandler.class.php';
//include __DIR__.'/../api/v3/handler/QuickReplyHandler.class.php';
//include __DIR__.'/../api/v3/handler/DialogflowHandler.class.php';

// END : Handler ///////////////////////////////////////


use Psr\Http\Message\ResponseInterface as Response; //use Slim\Http\Response;
use Psr\Http\Message\ServerRequestInterface as Request; //use Slim\Http\Request;
use Slim\Routing\RouteCollectorProxy;

use Chicken\Handler\UserHandler;
use Chicken\Handler\ChefHandler;
use Chicken\Handler\DeliveryboyHandler;
use Chicken\Handler\ClientHandler;
use Chicken\Handler\CategoryHandler;
use Chicken\Handler\ProductHandler;
use Chicken\Handler\ComboHandler;
use Chicken\Handler\PromoHandler;


$app->group('/api/chef', function (RouteCollectorProxy $group) {
    $group->post('/add', ChefHandler::class . ':addChef');
    $group->get('/select', ChefHandler::class . ':getChefs');
    $group->get('/get/{idChef}', ChefHandler::class . ':getChef');
    $group->post('/delete', ChefHandler::class . ':deleteChef');
});

$app->group('/api/deliveryboy', function (RouteCollectorProxy $group) {
    $group->post('/add', DeliveryboyHandler::class . ':addDeliveryboy');
    $group->get('/select', DeliveryboyHandler::class . ':getDeliveryboys');
    $group->get('/get/{idDeliveryboy}', DeliveryboyHandler::class . ':getDeliveryboy');
    $group->post('/delete', DeliveryboyHandler::class . ':deleteDeliveryboy');
});

$app->group('/api/client', function (RouteCollectorProxy $group) {
    $group->get('/get/{idClient}', ClientHandler::class . ':getClient');
    $group->post('/add', ClientHandler::class . ':addClient');
    $group->post('/changepassword', ClientHandler::class . ':changePassword');
    $group->post('/edit', ClientHandler::class . ':editClient');
});

$app->group('/api/user', function (RouteCollectorProxy $group) {
    $group->post('/login', UserHandler::class . ':loginUser');
});

$app->group('/api/category', function (RouteCollectorProxy $group) {
    $group->post('/add', CategoryHandler::class . ':addCategory');
    $group->get('/select', CategoryHandler::class . ':getCategories');
    $group->get('/get/{idCategory}', CategoryHandler::class . ':getCategory');
    //$group->post('/edit/{categoryid}', CategoryHandler::class . ':editCategory');
    $group->post('/delete', CategoryHandler::class . ':deleteCategory');
});

$app->group('/api/product', function (RouteCollectorProxy $group) {
    $group->post('/add', ProductHandler::class . ':addProduct');
    $group->post('/uploadimg', ProductHandler::class . ':uploadImage');
    $group->get('/select', ProductHandler::class . ':selectProduct');
    $group->get('/select-category/{idCategory}', ProductHandler::class . ':selectProductByCategory');
    $group->get('/get/{idProduct}', ProductHandler::class . ':getProduct');
    //$group->post('/edit/{idProduct}', ProductHandler::class . ':editProduct');
    $group->post('/delete', ProductHandler::class . ':deleteProduct');
});

$app->group('/api/combo', function (RouteCollectorProxy $group) {
    $group->post('/add', ComboHandler::class . ':addCombo');
    $group->post('/uploadimg', ComboHandler::class . ':uploadImage');
    $group->get('/select', ComboHandler::class . ':getCombos');
    $group->get('/selectprods/{idCombo}', ComboHandler::class . ':selectProducts');
    $group->get('/get/{idCombo}', ComboHandler::class . ':getCombo');
    //$group->post('/edit/{idCombo}', ComboHandler::class . ':editCombo');
    $group->post('/delete', ComboHandler::class . ':deleteCombo');
});

$app->group('/api/promo', function (RouteCollectorProxy $group) {
    $group->post('/add', PromoHandler::class . ':addPromo');
    $group->get('/select', PromoHandler::class . ':getPromos');
    $group->get('/get/{idPromo}', PromoHandler::class . ':getPromo');
    //$group->post('/edit/{idPromo}', PromoHandler::class . ':editPromo');
    $group->post('/delete', PromoHandler::class . ':deletePromo');
});

?>