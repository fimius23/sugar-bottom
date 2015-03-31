<?php
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$formcontent="Name: $name\n\nEmail: $email\n\nMessage: $message";
	
	// Enter the email where you want to receive the notification when someone submit form
	$recipient = "kramerlicsw@gmail.com";
	
	$subject = "From Your Website... Read This Now!";
	
	$mailheader = "From: $email\\r\\n";
	$mailheader .= "Reply-To: $email\\r\\n";
	$mailheader .= "MIME-Version: 1.0\\r\\n";
	
	$success = mail($recipient, $subject, $formcontent, $mailheader);
	
	if ($success == true){
	
?>
	
	<script language="javascript" type="text/javascript">
		alert('Thank you for your e-mail. I will contact you soon.');
		window.location = "../index.html";
	</script>
	
<?php
	
	} else {
	
?>

    <script language="javascript" type="text/javascript">
		alert('Message not sent. Please send an e-mail to kramerlicsw@gmail.com');
		window.location = "../index.html";
    </script>
	
<?php

    }
	
?>