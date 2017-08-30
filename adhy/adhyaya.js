$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
})

function validform(){

	var email=document.getElementById('email').value;
	var atpos=email.indexOf('@');
	var dotpos=email.lastIndexOf('.');
	if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length){
		alert("Enter valid email id");
		return false;
	}
}