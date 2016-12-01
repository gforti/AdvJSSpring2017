<?php
header("Access-Control-Allow-Orgin: *");
header("Content-Type: application/json; charset=utf8");
$status_codes = array(  
                    200 => 'OK',           
                    500 => 'Internal Server Error',
                );
$status = 200;

include_once './upload-function.php';

try {
    $fileName = uploadImage('upfile');
    $message = 'File '.$fileName. ' has been uploaded successfully.';
} catch (RuntimeException $e) {
    $message = $e->getMessage();
    $status = 500;
}

header("HTTP/1.1 " . $status . " " . $status_codes[$status]);

$response = array(
    "status" => $status,
    "status_message" => $status_codes[$status],
    "message" => $message    
);

echo json_encode($response, JSON_PRETTY_PRINT);