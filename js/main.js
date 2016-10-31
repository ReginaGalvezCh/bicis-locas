/*
bueno para probar y hacer funcionar todas las partes de mmi codigo lo tuve que hacer en este orden, 
crei que no estaba funcionando pero si comprueba todas las secciones, solo que en otro orden no toma
todo el tiempo el realizar las validaciones
*/
function validateForm(){
	
	var inputname = document.getElementById('name').value;
	if( inputname == null || inputname.length == 0|| /^\s+$/.test(inputname) ) {
		alert('Parece que no has ingresado tu nombre');
		return false;
	}else if (inputname.charAt(0).toUpperCase() !== inputname.charAt(0)){
		alert('La primera letra de tu nombre debe de ser mayuscula');
		return false;
	}
	
	var inputlastname = document.getElementById('lastname').value;
	if( inputlastname == null || inputlastname.length == 0|| /^\s+$/.test(inputlastname) ) {
		alert('Parece que no has ingresado tu apellido');
		return false;
	}else if(inputlastname.charAt(0).toUpperCase() !== inputlastname.charAt(0)){
		alert('La primera letra de tu apellido debe de ser mayuscula');
		return false;
	}

	var qbici = document.querySelector('select').value;
	if( qbici == null || qbici == 0 ) {
		alert('Hola elije una bici =)');
		return false;
	}


	var pass = document.getElementById('input-password').value;
	if( pass.length == 0 || /^\s+$/.test(pass)){
		alert('ingresa una contraseña');
		return false;
	} else if(pass== "123456" || pass == "098754"){
		alert('No puedes usar 123456 ni 098754');
		return false;
	}else if(pass.length < 6){
		alert('Prfavor que sea mayor a 6 digitos');
		return false;
	}

	var mail = document.getElementById('input-email').value;
	if(mail.length == 0){
		alert('ingresa tu email');
		return false;
	}
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
		return false;
	}
	
	return true;
} 


