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
	
	$sql1 = "SELECT * FROM registration WHERE email = '".$_POST['email']."'";
	$result = mysqli_query($conn, $sql1);
	
	if(mysqli_num_rows($result) > 0) {
		$data1 = array("message" => "Email already exists. Please try with a new one.", "status" => "Failure");
		echo json_encode($data1);
	}
	else {
		$sql = "INSERT INTO registration (firstname, lastname, email, password)
			VALUES ('".$_POST['fname']."', '".$_POST['lname']."', '".$_POST['email']."', '".$_POST['password']."')";
		
		
		if (mysqli_query($conn, $sql)) {
		$data = array("data" => "Your Data added successfully", "status" => "Success");
		echo json_encode($data);
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	
	/*if($_POST){
		print(json_encode($_POST));
	}*/
 ?>		