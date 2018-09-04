<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <title>App Test Signature Components</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">    
    <meta name="description" content="App for test of Signature_pad and JSignature Libraries">
    <meta name="keywords" content="">
    <meta name="author" content="MayaSoft - Mint">
    <meta property="og:title" content="App Test Signature Components" />
	<meta property="og:url" content="http://dromedicas.sytes.net:8080/SignComponent/" />
	<meta property="og:description" content="App for test of Signature_pad and JSignature Libraries">
	<!-- <meta property="og:image" content=""> -->
	<meta property="og:type" content="Application" />
	<meta name="HandheldFriendly" content="True">
	
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
    
  </head>
  <body>
    
    <section>
    	<div class="row align-center titles">
    		<div class="columns small-12 clearfix"><h3>Signature Component Test</h3></div>
    	</div>
    </section>
    
    <section id="main-section">
    	<div class="row align-center">
    		<div class="columns small-9"><a href="${pageContext.request.contextPath}/jsignature.jsp" class="button warning expanded">JSignature</a></div>
    		<div class="columns small-9"><a href="${pageContext.request.contextPath}/signaturepad.jsp" class="button success expanded">Signature_pad</a></div>
    	</div>
    </section>

 	<script src="libs/jquery.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    
   
    </body>
</html>
