<?php 
        
function dbconnect() {
    $config = array(
        'DB_DNS' => 'mysql:host=localhost;port=3306;dbname=JSadvClass',
        'DB_USER' => 'root',
        'DB_PASSWORD' => ''
    );
    try {
        /* Create a Database connection and 
         * save it into the variable */
        $db = new PDO($config['DB_DNS'], $config['DB_USER'], $config['DB_PASSWORD']);
        $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    } catch (Exception $ex) {
        /* If the connection fails we will close the 
         * connection by setting the variable to null */
        $db = null;
        $message = $ex->getMessage();
        exit($message);
    }
    return $db;
}


function userNameTaken($username) {
   
    $response = false;
    $db = dbconnect();
    $stmt = $db->prepare("SELECT * FROM login WHERE username = :username");
    
    $binds = array(
        ":username" => $username
    );
        
    if ($stmt->execute($binds) && $stmt->rowCount() > 0) {       
        $response = true;
    } 
    
    return $response;
}

function loginValid($username, $password) {
   
    $response = false;
    $db = dbconnect();
    $stmt = $db->prepare("SELECT * FROM login WHERE username = :username and password = :password");
    
    $password = sha1($password);
    
    $binds = array(
        ":username" => $username,
        ":password" => $password
    );
        
    if ($stmt->execute($binds) && $stmt->rowCount() > 0) {       
        $response = true;
    } 
    
    return $response;
}


function loginSave($username, $password) {
   
    $response = false;
    $db = dbconnect();
    $stmt = $db->prepare("INSERT INTO login SET username = :username, password = :password");

    $password = sha1($password);
    
    $binds = array(
        ":username" => $username,
        ":password" => $password
    );
        
    if ($stmt->execute($binds) && $stmt->rowCount() > 0) {       
        $response = true;
    }
    
    return $response;
}