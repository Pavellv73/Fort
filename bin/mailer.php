<?php

$message = '<h2>Новая заявка с сайта «FORT»</h2>';

if (isset($_POST['name']))
    $message .= '<p>Имя <b>' . $_POST['name'] . '</b></p>';

if (isset($_POST['email']))
    $message .= '<p>Электронная почта <b>' . $_POST['email'] . '</b></p>';

if (isset($_POST['phone']))
    $message .= '<p>Номер телефона <b>' . $_POST['phone'] . '</b></p>';

include "class.phpmailer.php";

$mail = new PHPMailer();
$mail->From = $_REQUEST['email'] ? $_REQUEST['email'] : "orders@next-team.ru";
$mail->FromName = $_REQUEST['name'];
$mail->AddAddress('lp@next-team.ru, salemeb@fort-mebel.ru');
$mail->IsHTML(true);
$mail->Subject = "Новая заявка с сайта «FORT»";
$mail->Body = $message;

if (!$mail->Send()) print ('Mailer Error: ' . $mail->ErrorInfo);

?>