<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <title>JSignature</title>
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/font-awesome.css">
  </head>
  <body>
    
    <section>
    	<div class="row align-center titles">
    		<div class="columns small-12 clearfix"><h3 class="jsignature">Test - jSignature</h3></div>
    	</div>
    </section>
    
    <section>
    	
    	<div class="row align-center">
    		<div class="columns small-8">
    			<a href="${pageContext.request.contextPath}" id="volver"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
    		</div>
    	</div>
    	<form action="${pageContext.request.contextPath}/WebController" id="form-sign" method="post">
    	<input type="hidden" name="option" id="option" />
    	<div class="row align-center">
    		<div class="columns small-12 medium-8">
	    		<div id="signature"></div>
    		</div>
    	</div>
    	<div class="row align-center buttons-container">
    	<div class="columns small-8">
    		<div class="row">
    			<div class="columns small-12 medium-6" >
	    		<p class="button expanded secondary" id="btn-jSignature"><i class="fa fa-check" aria-hidden="true"></i> Submit</p>
	    	</div>
	    	<div class="columns small-12 medium-6">
	    		<a href="${pageContext.request.contextPath}/jsignature.jsp" class="button expanded secondary" id="btn-cancel"><i class="fa fa-ban" aria-hidden="true"></i> Reset</a>     			
	    	</div>
    		</div>
    	</div>
    		
    	</div>
    	<img src="" alt="" id="show-sign" class="float-center"/>
    	<input type="hidden" name="sign" id="sign-b64"/>
    	<input type="hidden" name="restore-sign" id="restore-sign" value="${imgCoordinates}"/>
    	<input type="hidden" name="domparam" id="domparm" />
    	</form>
    </section>

 	<script src="libs/jquery.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    
   
    <!-- CDN para jSignature -->
    <script src="libs/jSignature.min.noconflict.js"></script>
    
    
    <script src="js/app.js"></script>
  </body>
</html>
