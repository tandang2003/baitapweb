<!DOCTYPE html>
<html lang="en">
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="<c:url value="/views/style.css"/>">
    <link rel="stylesheet" href="<c:url value="/views/fontawesome-free-6.4.2-web/css/all.min.css"/>">
</head>
<body>
<div class="container">
    <form action="" class="wrapper" >
        <div class="title">
            <h3>Sign up</h3>
        </div>
        <div class="input_field">
            <div class="input input-email">
                <input id="email" type="text" placeholder="username or email">
            </div>
            <div class="input input-password">
                <input id="password" type="password" placeholder="password">
            </div>
        </div>
        <div class="wrapper-button">
            <button type="button" class="button button-submit" id="button"> Submit</button>
        </div>
        <div class="orther-descri"><p> Or login with</p></div>
        <div class="social-icon">
            <div class="icon-container" >
                <i class="icon-select fa-brands fa-facebook-f" style="color: #30579c; font-size: 22px"></i>
            </div>
            <div class="icon-container">
                <img class="icon-select" src="<c:url value="/views/img/google.svg"/>" alt="google icon">
            </div>
        </div>
        <div class="sign-up-link">
            <a href="#"> Sign up</a>
        </div>
    </form>
</div>

<script src="<c:url value="/views/script.js"/>"></script>
</body>
</html>