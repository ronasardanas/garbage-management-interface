
<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smart_garbage";

    // Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
if ($conn->connect_error) {
    die("Database Connection failed: " . $conn->connect_error);
}


if(!empty($_POST['status']))
{
    $status = $_POST['status'];

    $sql = "INSERT INTO logs (level_value) VALUES (".$status.")";

    if ($conn->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

if(!empty($_POST['getStatus']))
{

    $sql = "SELECT * FROM logs ORDER BY id DESC LIMIT 1 ";
    $query = $conn->query($sql);

    $result = '';

    while ($orderResult = $query->fetch_assoc()) {
        $result =  $orderResult['level_value'];
    }

    echo $result;
}

$conn->close();