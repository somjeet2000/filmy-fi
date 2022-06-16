<!DOCTYPE html>
<html>
<head>
	<title>List</title>
</head>
<?php

include_once("core.php");

function get_data()
{
	$connect = mysqli_connect("localhost", "root", "", "user");
	$query = "SELECT * FROM registration ORDER BY id";
	$result = mysqli_query($connect, $query);
	$data = array();
	while($row = mysqli_fetch_array($result))
	{
		$data[] = array(
			'id'		=> $row["id"],
			'firstname' => $row["firstname"],
			'lastname'	=> $row["lastname"],
			'email'		=> $row["email"],
			'password'	=> $row["password"]
		);
	}
	
	return json_encode($data, JSON_PRETTY_PRINT);
}

echo '<pre>';
print_r(get_data());
echo '</pre>';

?>
</html>