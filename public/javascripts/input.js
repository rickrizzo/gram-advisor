function getCoords(e) {
	if (e.id == 'B'){
		var lat = 41.403;
		var lon = 2.173;
		//console.log(lat,lon);
		window.location.href = '/results?lat='+lat+'&lon='+lon;
		//window.location.href = '/'+lat+'&'+lon;
		//window.location.href = "http://www.gorissen.info/Pierre/maps/googleMapLocation.php?lat="+lat+"&lon="+lon+"&setLatLon=Set";
	} else if (e.id == 'T'){
		var lat = 35.685;
		var lon = 139.753;
		console.log(lat,lon);
	} else {
		var lat = 32.78;
		var lon = -79.94;
		console.log(lat,lon);
	}
	return lat, lon;
}

/*
$("#city").on("change keyup", function() {
  var city = $(this).val()
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
    if(val.results.length) {
      var location = val.results[0].geometry.location
      $("#lat").val(location.lat)
      $("#lon").val(location.lng)
    }
  })
})
AIzaSyC40DYA-s23G5ub6s_w4RFSjGDEjMTwVzQ


function getInput() {
	var input = document.getElementById("Destination").value;
	//$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(input), function(val) P
	//console.log(input);
	//var text = document.getElementById('Destination').value;
	//alert("Hello!");
	return input;
}

$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=Charleston', function(val){
	var city = $(this).val()
	//$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=Charleston", function(val) {
	if(val.results.length) {
		var location = val.results[0].geometry.location
		$("#lat").val(location.lat)
		$("#lon").val(location.lng)
    }
})

$("#Destination").on("change keyup", function() {
  var city = $(this).val()
	//$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=Charleston", function(val) {
	if(val.results.length) {
		var location = val.results[0].geometry.location
		$("#lat").val(location.lat)
		$("#lon").val(location.lng)
    }
})
*/
