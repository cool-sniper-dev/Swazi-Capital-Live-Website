<?php
//getting data
$name = $_POST['name'];
$surname = $_POST['surname'];
$phoneNumber = $_POST['phoneNumber'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'Swazi Capital Website';

$email_subject = 'New Message From swazicapital.com';
$email_body = "Name: $name.\n".
              "Surname: $surname.\n".
              "Phone Number: $phoneNumber.\n".
              "Email: $email.\n".
              "Message: $message.\n";


$to = "tpnovember97@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To:  $email \r\n";

mail($to,$email_subject,$email_body,$headers);


header("location: index.html");



?>