<?php

    include './API-functions.php';
    
    $status_codes = array(  
        200 => 'OK',
        201 => 'Created',       
        500 => 'Internal Server Error',
    );

    $response = array(    
        "errors" => NULL,
        "data" => NULL
    );
   
      
    $username = filter_input(INPUT_POST, 'username');
    $password = filter_input(INPUT_POST, 'password');

    $status = 200;
    
    $response['data']['loginValid'] = loginValid($username, $password);
    
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, UPDATE, DELETE");
    header("Content-Type: application/json; charset=utf8");
    
    header("HTTP/1.1 " . $status . " " . $status_codes[$status]);
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit();
