function duration(){
	delete currTime;
	var currTime=new Date();
	return currTime.getTime()-onloadTime;
}
function testFn(Bulk){
	dbgPrint('Global',"<<CAUTION!!>>\n Running on IE only.");
	if(__DEBUG__){
		document.onmousemove=function(){
			if(__DEBUG__){
					debugWindow.mouseLoc.value+='['+duration()+'ms]clientX/Y>>('+window.event.clientX+','+window.event.clientY+')\n';
			}
		};
	}
}
function imgChange(ImgUrl,positionName){
	dbgPrint('Object','positionName>> '+positionName.name);
	var newImage=new Image();
	newImage.src=ImgUrl;
	newImage.onload=function(){
		dbgPrint('Event','[onload]'+ImgUrl+' loading successed.');
		dbgPrint('Event','	[before changing] src>>'+positionName.src);
		positionName.src=newImage.src;
		dbgPrint('Event','	[Initial loading] src>>'+positionName.src+' caching successed.\n------------');
	};
	newImage.onerror=function(){
		dbgPrint('Event','[onerror]'+ImgUrl+' loading failed.\n------------');
	};
	if(!positionName.complete){
		imgChange(ImgUrl,positionName);
	}else{
		dbgPrint('Event','[complete]'+positionName.name+'.complete>>'+positionName.complete+'\n------------');
	}
	positionName.src=newImage.src;
}
//
function toggleImages(objName,evt){
	if(evt=='onmouseover'){
		document.getElementById(objName.id).style.visibility='visible';
	}else if(evt=='onmouseout'){
		document.getElementById(objName.id).style.visibility='hidden';
	}
}
//
function dbgPrint(stateCategory,txt){
	if(__DEBUG__){
		if(stateCategory=='Global'){
			debugWindow.statusArea01.value+='[['+duration()+'ms.]]'+txt+'\n';
		} else if(stateCategory=='Event'){
			debugWindow.statusArea02.value+='[['+duration()+'ms.]]'+txt+'\n';
		} else if(stateCategory=='Object'){
			debugWindow.statusArea03.value+='[['+duration()+'ms.]]'+txt+'\n';
		}
	}
}

/* DHTML support functions. */
function parentHeight(childObj){
	if(navigator.userAgent.indexOf("MSIE")>-1){
		return Number(childObj.parentNode.offsetHeight);
	}else{
		return Number(childObj.parentNode.clientHeight-(childObj.parentNode.style.borderTopWidth+childObj.parentNode.style.borderBottomWidth)-(childObj.style.borderTopWidth+childObj.style.borderBottomWidth));
	}
}
function targetHeight(targetObj){
	if(navigator.userAgent.indexOf("MSIE")>-1){
		return Number(targetObj.offsetHeight-(targetObj.currentStyle.borderTopWidth+targetObj.currentStyle.borderBottomWidth));
	}else{
		return Number(targetObj.offsetHeight);
	}
}

/* v01, w01 Toggle Button */
function toggleImages(objName,evt){
	if(evt=='onmouseover'){
		document.getElementById(objName.id).style.visibility='visible';
	}else if(evt=='onmouseout'){
		document.getElementById(objName.id).style.visibility='hidden';
	}
}

