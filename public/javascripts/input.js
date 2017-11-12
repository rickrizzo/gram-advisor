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
*/
$.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=Charleston', function(val){
	var city = $(this).val()
	//$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=Charleston", function(val) {
	if(val.results.length) {
		var location = val.results[0].geometry.location
		$("#lat").val(location.lat)
		$("#lon").val(location.lng)
    }
});

/*
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
