<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    if (!$email) {
        echo "<script>alert('Invalid email address. Please try again.'); window.history.back();</script>";
        exit;
    }

    $to = "syamslamri10@gmail.com"; 
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Your message has been sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Error sending message. Please try again later.'); window.history.back();</script>";
    }
}
?>
