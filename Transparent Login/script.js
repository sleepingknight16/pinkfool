function validationForm(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == "" && password == ""){
		alert('Username Dan Password Tidak Boleh Kosong!!!');
		return false;
	}else if(username == ""){
		alert('Username Tidak Boleh Kosong !!!');
		return false;
	}else if(password == ""){
		alert('Password Tidak Boleh Kosong!!!');
		return false;
	}
}