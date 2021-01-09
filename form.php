<?php
  $name = $_POST['user_name'];
  $visitor_email = $_POST['user_email'];
  $message = $_POST['user_message'];
	$email_from = 'yourname@yourwebsite.com';

	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".?>
