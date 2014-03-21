<?php

// Gathering Information from The User input

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$budget = $_POST['budget'];
$service = $_POST['service'];

$myAdd = "shixels@shixels.com";
$message = 'From: '.$name.' Email: '.$email.' Message: '.$msg.'Phone: '.$phone.' Website: '.$website.' Budget: '.$budget.'Service: '.$service;
$headers = 'From: ' .' <'.$email.'>' . "\r\n"; 
$subject = 'Lets Talk '.$service;

// Contains the email parameters

$success = mail($myAdd, $subject, $message, $headers);

// Sends the email if a success
if ($success) {
echo 'true';
}  else {
echo "false";
}

?>