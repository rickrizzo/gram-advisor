$.get('http://localhost:3000/api/', function(data) {
  data.forEach(function(location) {
    console.log(location.name);
  });
});

$(document).ready(function(){
    $("#detailsbtn").click(function(){
        $("#myModal").modal();
    });
});
