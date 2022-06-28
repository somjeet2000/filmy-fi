<?php
	header('Access-Control-Allow-Origin: *');
	$rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);
	
	$servername = "localhost";
	$username   = "root";
	$password   = "";
	$dbname     = "user";
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT * FROM registration WHERE email = '".$_POST['email']."' and password = '".$_POST['password']."'";
	$result = mysqli_query($conn, $sql);
	
	if(mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_array($result)) {
				$data = array(
				'id'		=> $row["id"],
				'firstname' => $row["firstname"],
				'lastname'	=> $row["lastname"],
				'email'		=> $row["email"],
				"status" 	=> "Success");
		}
		echo json_encode($data, JSON_PRETTY_PRINT);
	}
	else {
		$data1 = array("message" => "Invalid Credentials.", "status" => "Failure");
		echo json_encode($data1);
	}
?>