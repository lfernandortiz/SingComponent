<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundation for Sites</title>
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
