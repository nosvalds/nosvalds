<?php

// check if post contains content, probably add some validation
if (count($_POST) > 0) {
    // Build up the message from the post request
    $email_message .= "Name: ".$_POST["name"]."\n";
    $email_message .= "Email: ".$_POST["email"]."\n";
    $email_message .= "Message: ".$_POST["message"]."\n";
    
    // use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);
    
    // send email to me
    mail("nosvalds@gmail.com","Personal Website Contact",$email_message);
}
