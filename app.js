function validateForm() {
	let a = document.forms["Form"]["firstname"].value;
	if (a == "") {
	  alert("First name must be filled out");
	  return false;
	}

	let b = document.forms["Form"]["lastname"].value;
	if (b == "") {
	  alert("Last name must be filled out");
	  return false;
	}

	let c = document.forms["Form"]["age"].value;
	if (c == "") {
	  alert("Age must be filled out");
	  return false;
	}

	let d = document.forms["Form"]["phone"].value;
	if (d == "") {
	  alert("Phone # must be filled out");
	  return false;
	}
  }