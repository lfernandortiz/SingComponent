$(document).foundation()

var $sigdiv;
var imgB64;
//Data Restore
var restoreSign; 


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
	
	var coordinates = document.querySelector("#restore-sign").value;
	console.log("Coordenada recibidas: "  + coordinates)
	if(coordinates){
		restoreSign = coordinates;
		restore();
	}
	
	
//	document.getElementById("form-sign").addEventListener("submit", function(e){ 
//		e.preventDefault()}, false);
	

	
}

function processSign(){
	console.log("Process Sign :-) ..");
	
	//get Data sign
	var datapair = $sigdiv.jSignature("getData", "image"); 
	var i = new Image();
	imgB64 = "data:" + datapair[0] + "," + datapair[1]
	i.src = imgB64;
	
	
	console.log("Firma base64:"  + datapair)
	
	restoreSign = $sigdiv.jSignature("getData","base30") 
	console.log("--" + restoreSign );
	document.querySelector("#restore-sign").value = restoreSign;
	
	//preview
//	var prvw = document.querySelector("#show-sign");	
//	prvw.src = imgB64; 
//	prvw.style.display='block';
	
	//set value in input hidden
	document.querySelector("#sign-b64").value = imgB64;
	document.querySelector("#domparm").value = document.documentElement.innerHTML;
	
	//hidden sign pane
	//document.querySelector("#signature").style.display = 'none';
	document.querySelector("#option").value = "jsig";
	document.querySelector("#form-sign").submit();
	
}

function reset(){
	
	var prvw = document.querySelector("#show-sign");
	prvw.src = ""; 
	prvw.style.display='none';
	$sigdiv.jSignature("reset");
}


function restore(){
	console.log(restoreSign);
	$sigdiv.jSignature("setData", "data:" + restoreSign) 
}

//Register event initial
window.addEventListener("load", init, false);