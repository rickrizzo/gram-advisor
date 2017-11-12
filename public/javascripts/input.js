function getCoords(e) {
	if (e.id == 'B'){
		var lat = 41.403;
		var lon = 2.173;
		window.location.href = '/results?lat='+lat+'&lon='+lon;
	} else if (e.id == 'T' || e.id == 'Submit'){
		var lat = 42.728;
		var lon = -73.691;
		window.location.href = '/results?lat='+lat+'&lon='+lon;
	} else {
		var lat = 32.78;
		var lon = -79.94;
		window.location.href = '/results?lat='+lat+'&lon='+lon;
	}
}