<?php
/*
 * At the simplest level, you are setting the headers to send JSON
 * then populating the response with data. Then echo out the array
 * to a json.  Any application that access this page will be able to
 * get the JSON and process the data how they like.
 */

$status_codes = array(  
        200 => 'OK',
        201 => 'Created',       
        500 => 'Internal Server Error',
    );

$status = 200;

$response = array(
    "status" => $status,
    "status_message" => $status_codes[$status],
    "message" => NULL   
);

$response['message'] = 'hello';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf8");
header("HTTP/1.1 " . $status . " " . $status_codes[$status]);

echo json_encode($response, JSON_PRETTY_PRINT);

exit();