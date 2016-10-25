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

	var email = document.getElementById('input-email').value;
	if( email=0 ) {
		alert('Parece que no has ingresado un email');
		return false;
	}
	if (/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(email)) {
		alert('Por favor ingresa un email valido');
		return false;
	}

	var password = document.getElementById('input-password').value;
	if( password == null || password.length <= 5 ) {
		alert('Parece que no has ingresado una contraseña(recuerda que debe ser mayor de 6)');
		return false;
	}
	if (password != 123456 && password != 098754){
		if (password.length<=5){
			return true;
		}else{ 
			alert('Sorry pero no puedes usar ni 123456 ni 098754');
			return false;
		}


	}

}