<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signature_Pad</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">    
    
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/font-awesome.css">
  </head>
  <body>
    
    <section>
    	<div class="row align-center titles">
    		<div class="columns small-12 clearfix"><h3 class="signature_pad">Test - Signature_pad</h3></div>
    	</div>
    </section>
    
    <section>
    	
    	<div class="row">
    		<div class="columns small-12">
    			<a href="${pageContext.request.contextPath}" id="volver"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
    		</div>
    	</div>
    	<form action="${pageContext.request.contextPath}/WebController" id="form-sign" method="post">
    	<input type="hidden" name="option" id="option" />
    	<div class="row align-center">
    		<div class="columns small-12">

					<div id="signature-pad" class="signature-pad">
						<div class="signature-pad--body">
							<canvas></canvas>
						</div>
					</div>

			</div>
    	</div>
    	<div class="row align-center buttons-container">
	    	<div class="columns small-12 medium-6">
	    		<p class="button expanded secondary" id="btn-jSignature"><i class="fa fa-check" aria-hidden="true"></i> Submit</p>
	    	</div>
	    	<div class="columns small-12 medium-6">
	    		<p class="button expanded secondary" id="btn-cancel"><i class="fa fa-ban" aria-hidden="true"></i> Reset</p>
	    	</div>
	    	
    		<div class="columns small-12"> 
    			<!-- <a href="" class="button expanded" id="btn-jSignature">Submit</a> -->
    			<div id="inner-jSignature"></div>
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
    
   
    <!-- CDN para signature_pad -->
    <script src="js/signature_pad.min.js"></script>
    
     <!-- <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script> -->
    
    
    <script src="js/appSignaturePad.js"></script>
  </body>
</html>
