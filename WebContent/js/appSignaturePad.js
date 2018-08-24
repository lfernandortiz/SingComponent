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
	signaturePad = new SignaturePad(canvas);
	
	//Register event for responsive functions of canvas
	resizePad();
	
	
	//Register event for submmit button
	var btn = document.getElementById("btn-jSignature");
	btn.addEventListener("click", processSign, false);	
	
	document.getElementById("form-sign").addEventListener("submit", function(e){ 
	e.preventDefault()}, false);
	
	var btnCancel= document.getElementById("btn-cancel");
	btnCancel.addEventListener("click", reset, false);
	
	var btnReset= document.getElementById("btn-restore");
	btnReset.addEventListener("click", restore, false);
	
}


function processSign(){
	console.log("Process Sign :-) ..");
	
	//get Data B64
	var data = signaturePad.toDataURL('image/jpeg');
	//set Data in input hidden
	document.querySelector("#sign-b64").value = data;
	console.log("----------" + data);
	
	//set DataRestore componente
	restoreSign = signaturePad.toData(); 
	document.querySelector("#restore-sign").value = restoreSign;	
	console.log(">>>>>>>" +  restoreSign);
	
	
}


function reset(){
	signaturePad.clear();
}

function restore(){
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

//	document.getElementById('save-png').addEventListener('click', function () {
//	  if (signaturePad.isEmpty()) {
//	    return alert("Please provide a signature first.");
//	  }
//	  
//	  var data = signaturePad.toDataURL('image/png');
//	  console.log(data);
//	  window.open(data);
//	});
//
//	document.getElementById('save-jpeg').addEventListener('click', function () {
//	  if (signaturePad.isEmpty()) {
//	    return alert("Please provide a signature first.");
//	  }
//
//	  var data = signaturePad.toDataURL('image/jpeg');
//	  console.log(data);
//	  window.open(data);
//	});
//
//	document.getElementById('save-svg').addEventListener('click', function () {
//	  if (signaturePad.isEmpty()) {
//	    return alert("Please provide a signature first.");
//	  }
//
//	  var data = signaturePad.toDataURL('image/svg+xml');
//	  console.log(data);
//	  console.log(atob(data.split(',')[1]));
//	  window.open(data);
//	});
//
//	document.getElementById('clear').addEventListener('click', function () {
//	  signaturePad.clear();
//	});
//
//	document.getElementById('undo').addEventListener('click', function () {
//		var data = signaturePad.toData();
//	  if (data) {
//	    data.pop(); // remove the last dot or line
//	    signaturePad.fromData(data);
//	  }
//	});

}


//Register event initial
window.addEventListener("load", init, false);