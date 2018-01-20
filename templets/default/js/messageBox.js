$(document).ready(function(e) { 
	var wintopfir=$("#messageBox").height(); 
	var wintopsec=wintopfir-150; 
	$("#bottomad").css({top:wintopfir+"px"}); 
	$("#bottomad").animate({top:wintopsec+"px" }, 800); 
	$("#adclose").click( function () { $("#bottomad").hide(); }); 
}); 
