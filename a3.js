var pictureArchive= ['http://earth.nullschool.net/#current/wind/isobaric/850hPa/overlay=total_precipitable_water/equirectangular=-277.50,0.00,223','http://privateweb.iitd.ernet.in/~ee5120561/display/rainandwind.php','http://privateweb.iitd.ernet.in/~ee5120561/display/rainandwind1.php','http://privateweb.iitd.ernet.in/~ee5120561/display/rainandwind2.php','http://privateweb.iitd.ernet.in/~ee5120561/display/image.php'];
window.onload=function() { 
rotate(pictureArchive.length); 
} 
function rotate(idx) { 
		 if(idx>=pictureArchive.length) {
		 	 idx=0; 
		 	}
		 if (idx ==0){
		 	document.getElementById('ima').src=pictureArchive[0];
		 	idx++;
		 	timerID=setTimeout('rotate('+idx+')', 18000);
		 	}
		 else if (idx == 1){
		 	document.getElementById('ima').src=pictureArchive[1];
		 	idx++;
		 	timerID=setTimeout('rotate('+idx+')', 6000);
		 	}
		else if (idx == 2){
		 document.getElementById('ima').src=pictureArchive[2];
		 	idx++;
		 	timerID=setTimeout('rotate('+idx+')', 6000);
		 	}
		else if (idx == 3){
		 	document.getElementById('ima').src=pictureArchive[3];
		 	idx++;
		 	timerID=setTimeout('rotate('+idx+')', 6000);
		 	}
		 else if (idx== 4){
		 	document.getElementById('ima').src=pictureArchive[4];
		 		idx++;
		 		timerID=setTimeout('rotate('+idx+')', 18000);
		 	}
}