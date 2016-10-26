function validateForm(){
	
	var name = document.getElementById("name").value;
	if( name == null || name.length == 0|| /^\s+$/.test(name) ) {
		alert('Parece que no has ingresado tu nombre');
		return false;
	}
	
	var lastname = document.getElementById('lastname').value;
	if( lastname == null || lastname.length == 0|| /^\s+$/.test(lastname) ) {
		alert('Parece que no has ingresado tu apellido');
		return false;
	}

	var pass = document.getElementById('input-password').value;
	if( pass == 0 ){
		alert('ingresa una contraseña');
		return false;

	}
	
	if(pass!= 123456 || pass!= 098754){
		if(pass.length > 6){
			return true;
		}else{
			alert('No puedes usar 123456 ni 098754');
			return false;
		}
	}else{
		alert('No puedes usar 123456 ni 098754');
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
	var elije = document.getElementsByClassName('form-control').value;
	if( elije == null || elije == 0){
		alert('elije una opcion');
		return false;
	}
}