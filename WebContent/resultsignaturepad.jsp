<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundation for Sites</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">    
    
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    
    <style id="style"></style>
  </head>
  <body>
    
    <section>
    	<div class="row align-center titles">
    		<div class="columns small-12 clearfix"><h4>Result - Signature_pad</h4></div>
    	</div>
    </section>
    
    <section>
    	
    	<div class="row align-center">
    		<div class="columns small-8">
    			<a href="${pageContext.request.contextPath}" id="volver"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
    		</div>
    	</div>
    	<form action="${pageContext.request.contextPath}/WebController" id="form-sign" method="POST">
    	<input type="hidden" name="option" id="option" />
    	<!-- this is the signature captured -->
    	<div class="row align-center">
    		<div class="columns small-12 medium-8" id="sign-conten-pad">
    			<div class="sign-result">
    				<img src="${imgbase64}" alt="" id="img-sign" class="float-center" style="max-width: 70%" />
    			</div>    			
    		</div>    		
    	</div>
    	<div class="row align-center buttons-container">
    	<div class="columns small-8">
    		<div class="row">
    		
	    	<div class="columns small-12 medium-6">
	    		<p class="button expanded secondary" id="btn-restore"><i class="fa fa-undo" aria-hidden="true"></i> Restore</p>    
	    	</div>
	    	<div class="columns small-12 medium-6">
	    		<p class="button expanded secondary" id="export"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> To Pdf</p>    
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
    
    

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
  
    <script src="js/appResultSP.js"></script>
    
  </body>
</html>
