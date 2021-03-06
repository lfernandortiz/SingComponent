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
  </head>
  <body>
    
    
     <section>
    	<div class="row align-center">
    		<div class="columns small-12 clearfix"><h3>Test - jSignature - Result</h3></div>
    	</div>
    </section>
    
      <section>
   	  <form action="${pageContext.request.contextPath}/WebController" id="form-sign" method="post">   	  
   	  <input type="hidden" name="option" id="option" />
   	  
      
      <div class="row">
    		<div class="columns small-12">
    			<a href="${pageContext.request.contextPath}" id="volver"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
    		</div>
    	</div>
    	
    	
    	<div class="row align-center">
    		<div class="columns small-12">
    			<div class="sign-result">
    				<img src="${imgbase64}" alt="" id="img-sign" class="float-center"/>
    			</div>	    		
    		</div>
    	</div>
    	
    	<div class="row align-center buttons-container">
	    	<div class="columns small-12 medium-6">
	    		<p class="button expanded secondary" id="btn-restorejs"><i class="fa fa-undo" aria-hidden="true"></i> Restore</p>    
	    	</div>
	    	<div class="columns small-12 medium-6">
	    		<p class="button expanded secondary" id="export"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> To Pdf</p>    
	    	</div>
    	</div>
    	<input type="hidden" name="sign" id="sign-b64"/>
    	<input type="hidden" name="restore-sign" id="restore-sign" value="${imgCoordinates}"/> 
    	<input type="hidden" name="domparam" id="domparm" />
    	</form>
   	  
    </section>
   

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
   
    <script src="js/appResultSg.js"></script>
    
  </body>
</html>
