<?php

// BEGIN : Data ///////////////////////////////////////////////
include __DIR__.'/../api/data/ChefData.class.php';
include __DIR__.'/../api/data/ClientData.class.php';
include __DIR__.'/../api/data/CategoryData.class.php';

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
include __DIR__.'/../api/controller/ClientController.class.php';
include __DIR__.'/../api/controller/CategoryController.class.php';

/* include __DIR__.'/../api/v3/controller/MaintenanceController.class.php';
include __DIR__.'/../api/v3/controller/TagController.class.php'; */
//include 'controller/TicketController.class.php';
// END : Controller ///////////////////////////////////////

// BEGIN : Handler ///////////////////////////////////////
include __DIR__.'/../api/handler/ChefHandler.class.php';
include __DIR__.'/../api/handler/ClientHandler.class.php';
include __DIR__.'/../api/handler/CategoryHandler.class.php';

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


use Chicken\Handler\ChefHandler;
use Chicken\Handler\ClientHandler;
use Chicken\Handler\CategoryHandler;


$app->group('/api/chef', function (RouteCollectorProxy $group) {
    $group->post('/add', ChefHandler::class . ':addChef');
    $group->get('/select', ChefHandler::class . ':getChefs');
    $group->post('/edit', ChefHandler::class . ':editChef');
    $group->post('/delete/{chefid}', ChefHandler::class . ':deleteChef');
});

$app->group('/api/client', function (RouteCollectorProxy $group) {
    $group->post('/add', ClientHandler::class . ':addClient');
    $group->post('/edit', ClientHandler::class . ':editClient');
});

$app->group('/api/user', function (RouteCollectorProxy $group) {
    $group->post('/login', UserHandler::class . ':loginUser');
});

$app->group('/api/category', function (RouteCollectorProxy $group) {
    $group->post('/add', CategoryHandler::class . ':addCategory');
    $group->get('/select', CategoryHandler::class . ':getCategories');
    $group->post('/edit/{categoryid}', CategoryHandler::class . ':editCategory');
    $group->post('/delete/{categoryid}', CategoryHandler::class . ':deleteCategory');
});

?>