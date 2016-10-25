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

	var password = document.getElementById('input-password').value;
	if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(password)) ) {
		alert('Parece que no has ingresado una contraseña');
		return false;
	}




}

