/**
 * 
 */
// Sign Object
var signaturePad;
// Data Restore
var restoreSign; 

function init(){
	console.log("Init components..");

	//It create object SignaturePad
	var canvas = document.querySelector("canvas");
		
	signaturePad = new SignaturePad(canvas, {backgroundColor: "rgb(255,255,255)"});
	
	
	//Register event for responsive functions of canvas
	resizePad();
	//Register event for responsive functions of canvas
	window.addEventListener("orientationchange", function() {
		console.log("orientationchange")
	    restoreSign = signaturePad.toData(); 
	    //signaturePad.clear();
	    resizePad();
	    var canvas = document.querySelector("canvas");
	    signaturePad = new SignaturePad(canvas, {backgroundColor: "rgb(255,255,255)"});
		orientationRestoreSign();
	});
	
	window.addEventListener('resize', function(){
		console.log("resize")
		restoreSign = signaturePad.toData(); 
		resizePad();
		
		signaturePad.clear();
	    var canvas = document.querySelector("canvas");
	    signaturePad = new SignaturePad(canvas, {backgroundColor: "rgb(255,255,255)"});
		
		//Register event for responsive functions of canvas
	    orientationRestoreSign()
	}, false);
	
	
	//Register event for submmit button
	var btn = document.getElementById("btn-jSignature");
	btn.addEventListener("click", processSign, false);	
	
	var btnCancel= document.querySelector("#btn-cancel");
	btnCancel.addEventListener("click", reset, false);
	
	//here to validate if there is that restore the signature
	var jsonCoordinates = document.querySelector("#restore-sign").value;
	console.log("Coordenada recibidas: "  + jsonCoordinates)
	if(jsonCoordinates){
		restoreSign = JSON.parse(decodeURIComponent(jsonCoordinates));
		restore();
	}
	
}


function processSign(){

	//get Data B64
	var data = signaturePad.toDataURL('image/png');
	//set Data in input hidden
	document.querySelector("#sign-b64").value = data;	
	
	//set DataRestore componente
	restoreSign = signaturePad.toData(); 
	
	console.log(restoreSign);
		
	//From Array object to String
	var coordinateString = JSON.stringify(restoreSign);
	console.log(coordinateString);
	document.querySelector("#restore-sign").value = encodeURIComponent(coordinateString);
	
	//to json
	var res = JSON.parse(coordinateString);
	restoreSign = res;
	
	document.querySelector("#option").value = "spad";
	document.querySelector("#form-sign").submit();
}


function orientationRestoreSign(){
	//set DataRestore componente
	signaturePad.fromData(restoreSign);
}


function reset(){
	signaturePad.clear();
	//re-init component
	document.querySelector("#restore-sign").value="";
	init()
}

function restore(){
	var canvas = document.querySelector("canvas");
	signaturePad = new SignaturePad(canvas, {backgroundColor: "rgb(255,255,255)"});	
	resizePad();
	
	signaturePad.fromData(restoreSign);
	
}


function resizePad(){
	var canvas = document.querySelector('canvas');

	// Adjust canvas coordinate space taking into account pixel ratio,
	// to make it look crisp on mobile devices.
	// This also causes canvas to be cleared.
	function resizeCanvas() {
	    // When zoomed out to less than 100%, for some very strange reason,
	    // some browsers report devicePixelRatio as less than 1
	    // and only part of the canvas is cleared then.
	    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
	    canvas.width = canvas.offsetWidth * ratio;
	    canvas.height = canvas.offsetHeight * ratio;
	    canvas.getContext("2d").scale(ratio, ratio);
	}

	window.onresize = resizeCanvas;
	resizeCanvas();

	var signaturePad = new SignaturePad(canvas, {
	  backgroundColor: 'rgb(255, 255, 255)' // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
	});

}


//Register event initial
window.addEventListener("load", init, false);