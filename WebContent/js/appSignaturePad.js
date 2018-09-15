/**
 * @lfernandortiz
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

	//Register event for orientationchange

	window.addEventListener("orientationchange", function() {
	    restoreSign = signaturePad.toData(); 
	    //signaturePad.clear();
	    resizePad();
		orientationRestoreSign();
	});
	//Register event for resize
	window.addEventListener('resize', function(){
		restoreSign = signaturePad.toData(); 
		resizePad();	
	    orientationRestoreSign()
	}, false);
	
	
	//Register event for submmit button
	var btn = document.getElementById("btn-jSignature");
	btn.addEventListener("click", processSign, false);	
	

	//Register event for reset button
	var btnCancel= document.getElementById("btn-cancel");
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
		
	//From Array object to String
	var coordinateString = JSON.stringify(restoreSign);
	document.querySelector("#restore-sign").value = encodeURIComponent(coordinateString);
	
	//to json
	var res = JSON.parse(coordinateString);
	restoreSign = res;
	
	document.querySelector("#option").value = "spad";
	document.querySelector("#form-sign").submit();
}


// Restore the signature in component 
function orientationRestoreSign(){
	//set DataRestore componente
	signaturePad.fromData(restoreSign);
}

// Clear canvas
function reset(){
	signaturePad.clear();
	//re-init component
	document.querySelector("#restore-sign").value="";
	init()
}


// Restore signature
function restore(){
	resizePad();	
	signaturePad.fromData(restoreSign);	
}


function resizePad(){		
	var canvas = document.querySelector('canvas');
	// Adjust canvas coordinate space taking into account pixel ratio,
	// to make it look crisp on mobile devices.
	// This also causes canvas to be cleared.	
	 var ratio =  Math.max(window.devicePixelRatio || 1, 1);
	 canvas.width = canvas.offsetWidth * ratio;
	 canvas.height = canvas.offsetHeight * ratio;
	 canvas.getContext("2d").scale(ratio, ratio);	
}


//Register event initial
window.addEventListener("load", init, false);