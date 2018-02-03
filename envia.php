<?php

require 'class.phpmailer.php';

$mail = new PHPMailer();
$mail->setLanguage('pt');


/* DADOS DO FORMULÁRIO DE CONTATO */

$nomeremente = $_POST['nomeremetente'];
$emailremetente = $_POST['emailremetente'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

$from = 'marimulti@live.com'; /* esse é que vai enviar o e-mail */
$fromName = 'Contato';
$host = 	'smtp.live.com';
$username = 'marimulti@live.com'; /* esse é que vai enviar o e-mail */
$password = 'RodriguesMweb123';
$port = 	587;
$secure =   'tls';

$mail->isSMTP();
$mail->Host       = $host;
$mail->SMTPAuth   = true;
$mail->Username   = $username;
$mail->Password   = $password;
$mail->Port		  = $port;
$mail->SMTPSecure = $secure;

$mail->From = $from;
$mail->FromName = $fromName;


$mail->addAddress('marimultimidia@gmail.com','Mariana Rodrigues - Email Gmail'); /* esse é que vai receber o e-mail */

$mail->isHTML(true);
$mail->CharSet = 'utf-8';
$mail->WordWrap = 70;

/* $mail->Body = '<p>MENSAGEM DO FORMULÁRIO DE CONTATO</p>';  */

$mail->Subject = 'Mensagem do Formulário de Contato';
$mail->Body = '<p>' .
        '<br />Nome: ' . $_POST['nomeremetente'] .
        '<br />Email: ' . $_POST['emailremetente'] .
        '<br />Tel: ' . $_POST['telefone'] .
        '<br />Msg: ' . $_POST['mensagem'] .
        '<br />MENSAGEM DO FORMULÁRIO DE CONTATO' .
        '</p>';

$mail->AltBody =  '<p>'.
        '<br />Nome: ' . $_POST['nomeremetente'] .
        '<br />Email: ' . $_POST['emailremetente'] .
        '<br />Tel: ' . $_POST['telefone'] .
        '<br />Msg: ' . $_POST['mensagem'] .
        '<br />MENSAGEM DO FORMULÁRIO DE CONTATO' .
        '</p>';




$send = $mail->Send();

if($send)
	echo "<script>window.location = 'index.html'
alert ('Obrigado por entrar em contato!')</script>";
else
	echo 'Erro : '.$mail->ErrorInfo;


?>
