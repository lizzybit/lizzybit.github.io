<?php
if (isset($_POST['submit'])) {
    $to = "elizabethstorey@live.com";
    $subject = "New message from your website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: " . $name . "<" . $email . ">";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Oops, something went wrong. Please try again later.";
    }
}
?>