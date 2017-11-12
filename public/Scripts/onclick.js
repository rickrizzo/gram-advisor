var ids = [];

function selected(id){
   if (ids.includes(id)) {
   	const index = ids.indexOf(id);
    ids.splice(index, 1);
   	document.getElementById(id).style.border = "none";
   }
   else {
   	alert("click");
   	ids.push(id);
   	document.getElementById(id).style.border = "thick solid #000000";
   }
}