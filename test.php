<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "zoo_club";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Данные успешно сохранены");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email']) && isset($_POST['password'])) {
        // Обработка данных из формы
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Хешируем пароль для безопасного хранения

        // Вставка данных в таблицу
        $stmt = $pdo->prepare("INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
        $stmt->execute([$first_name, $last_name, $email, $password]);

        echo "Данные успешно сохранены в базе данных.";
    } else {
        echo "Пожалуйста, заполните все поля формы.";
    }
}

?>
