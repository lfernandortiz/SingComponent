$(document).foundation()

var $sigdiv;
var imgB64;

function init(){
	
	console.log("Init components..");
	//select componente firm
	$sigdiv = $("#signature");
	$sigdiv.jSignature() ; //init
	$sigdiv.jSignature("reset");
	
	
	var btn = document.getElementById("btn-jSignature");
	btn.addEventListener("click", processSign, false);
	
	
	var btnCancel= document.getElementById("btn-cancel");
	btnCancel.addEventListener("click", reset, false);
	
	
//	document.getElementById("form-sign").addEventListener("submit", function(e){ 
//		e.preventDefault()}, false);
	

	
}

function processSign(){
	console.log("Process Sign :-) ..");
	
	//get Data sign
	var datapair = $sigdiv.jSignature("getData", "svgbase64"); 
	var i = new Image();
	imgB64 = "data:" + datapair[0] + "," + datapair[1]
	i.src = imgB64;
	
	
	console.log("Firma base64:"  + datapair)
	
	//preview
	var prvw = document.querySelector("#show-sign");	
	prvw.src = imgB64; 
	prvw.style.display='block';
	
	//set value in input hidden
	document.querySelector("#sign-b64").value = imgB64;
	document.querySelector("#domparm").value = document.documentElement.innerHTML;
	
	//hidden sign pane
	//document.querySelector("#signature").style.display = 'none';
	
}

function reset(){
	
	var prvw = document.querySelector("#show-sign");
	prvw.src = ""; 
	prvw.style.display='none';
	$sigdiv.jSignature("reset");
}

//Register event initial
window.addEventListener("load", init, false);