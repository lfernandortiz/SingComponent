/**
 * 
 */

function init(){
	console.log("Init result components...")
	
	var btnReset = document.querySelector('#btn-restorejs');
	btnReset.addEventListener('click', restoreSignature, false);
	
	var btnExport = document.querySelector('#export');
	btnExport.addEventListener('click', exportToPdf, false);
		
	
	var btnResetjs = document.querySelector('#btn-restorejs');
	btnResetjs.addEventListener('click', restoreSignaturejs, false);
	
}


function restoreSignature(){	
	console.log("Restore signature...")
	
	document.querySelector("#img-sign").src = "" ;
	
	document.querySelector("#option").value = "rsp";
	var coordinates = document.querySelector('#restore-sign').value;
	console.log("C: " + coordinates );
	document.querySelector('#restore-sign').value = coordinates;
	
	
	document.querySelector('#form-sign').submit();
}


function restoreSignature(){	
	console.log("Restore signature...")
	
	document.querySelector("#img-sign").src = "" ;
	
	document.querySelector("#option").value = "rspjs";
	var coordinates = document.querySelector('#restore-sign').value;
	console.log("C: " + coordinates );
	document.querySelector('#restore-sign').value = coordinates;
	
	
	document.querySelector('#form-sign').submit();
}






function exportToPdf(){
	console.log("Exporting to pdf...");
	
	document.querySelector("#domparm").value = document.documentElement.innerHTML;
	document.querySelector("#option").value = "topdf";
	
	document.querySelector('#form-sign').submit();
	
}


window.addEventListener('load', init, false);