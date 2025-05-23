function embedCSS( name ) {
	var nua = navigator.userAgent;
	if (nua.indexOf("MSIE 6") > -1) {
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ie6.css" type="text/css" />');
	} else if (nua.indexOf("MSIE 5") > -1) {
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ie5.css" type="text/css" />');
	} else if (nua.indexOf("Opera") > -1) {
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ff.css" type="text/css" />');
	} else if (nua.indexOf("Firefox") > -1) {
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ff.css" type="text/css" />');
	} else if (nua.indexOf("MSIE 7") > -1){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ie7.css" type="text/css" />');
	} else if (nua.indexOf("MSIE 8") > -1){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ff.css" type="text/css" />');
	} else if (nua.indexOf("MSIE 9") > -1){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ff.css" type="text/css" />');
	} else if (nua.indexOf("Netscape") > -1){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ff.css" type="text/css" />');
	} else if (nua.indexOf("Safari") > -1){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_mac.css" type="text/css" />');
	} else {
		document.write('<link rel="stylesheet" href="COMMON_RSRC/'+name+'_ie6.css" type="text/css" />');
	}
	if(name == "whole"){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/cursor.css" type="text/css" />');
	}
/*argument options*/
	if(location.href.indexOf('?nomenu=0') > -1){
		document.write('<link rel="stylesheet" href="COMMON_RSRC/nomenu.css" type="text/css" />');
	}
}
