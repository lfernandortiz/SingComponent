/**
 * 
 */

function init(){
	console.log("Init result components...")
	
	var btnReset = document.querySelector('#btn-restore');
	btnReset.addEventListener('click', restoreSignature, false);
	
	var btnExport = document.querySelector('#export');
	btnExport.addEventListener('click', exportToPdf, false);
			
	
	
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






function exportToPdf(){
	
	console.log("Exporting to pdf  xxxx...");	
		
	var sheets = document.styleSheets;
	console.log(sheets);
		
	var css = document.querySelector("#style");
	var cssTextFinal = "";
	
	
	//console.log("length: " + sheets[0] );
	
	for( var x = 0; x < sheets.length; x++){
		for( var i = 0; i < sheets[x].cssRules.length ; i++  ){
			cssTextFinal += sheets[x].cssRules[i].cssText 
			//
			console.log( cssTextFinal );
		}
	}
	
	//css.innerHTML= cssTextFinal;
	
	document.querySelector("#domparm").value = document.documentElement.innerHTML;
	document.querySelector("#option").value = "topdf";
	
	document.querySelector('#form-sign').submit();
	
}


window.addEventListener('load', init, false);