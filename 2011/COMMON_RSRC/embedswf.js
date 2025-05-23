
function embedSwf(id, w, h, file, fv ) {
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="' + w + '" height="' + h + '" id="' + id + '" align="middle">');
	document.write('<param name="allowScriptAccess" value="always" />');
	document.write('<param name="movie" value="' + file + '" />');
	document.write('<param name="quality" value="high" />');
	document.write('<param name="scale" value="noscale" />');
	document.write('<param name="salign" value="lt" />');
	document.write('<param name="bgcolor" value="#ffffff" />');
	document.write('<param name="FlashVars" value="' + fv + '" />');
	document.write('<embed src="' + file + '" quality="high" scale="noscale" salign="lt" bgcolor="#ffffff" width="' + w + '" height="' + h + '" name="' + id + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer"');
	document.write('FlashVars="' + fv + '" />');
	document.write('</object>');
}
