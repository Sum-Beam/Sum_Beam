<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "zoo_club";


$email = $_POST['email2'];
$pass  = $_POST['password2'];

if ($email =='' OR $pass==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT email, password FROM users WHERE email='".$email."' and password='".$pass."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "0";
    header('Location: index.html');

}
$conn->close();
?>