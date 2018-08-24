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
    	<div class="row align-center">
    		<div class="columns small-12 clearfix"><h3>Test - jSignature - Result</h3></div>
    	</div>
    </section>
    
      <section>
    	<div class="row align-center">
    		<div class="columns small-11 sign-result">
	    		<img src="${imgbase64}" alt="" id="img-sign" class="float-center"/>
    		</div>
    	</div>
    	
    	<div class="row">
    		<div class="columns small-12">
    			<a href="${pageContext.request.contextPath}" class="button success back float-right" >Regresar</a>    	
    		</div>
    	</div>
    		
    </section>
    
    

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
   
    
    
  </body>
</html>
