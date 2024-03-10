function formValidator(form1, form2, form3, form4){
  
	function form1(fname){
	  if ( fname.length <= 0) {
	console.log("First name is missing");
	}
	  if(typeof(fname) !== 'string'){
		console.log("First name must be a string");
	  }else{
		console.log("");
	  }
	}
	form1("Ginny");
	//============================
	
	function form2(lname){
	  if (lname.length <= 0) {
	console.log("Last name is missing");
	}
	  if(typeof(lname) !== 'string'){
		console.log("Last name must be a string");
	  }else{
		console.log("");
	  }
	}
	form2("Feng");
	//==============================
	
	function form3(age){
	  if (age.length <= 0) {
	console.log("Age is missing");
	}
	  if (typeof(age)==='string'||typeof(age)==='boolean'){
		console.log("Age must be a number");
	  }
	  if(age<18){
		console.log("Sorry, not old enough for our app");
	  }
	  else{
		console.log("");
	  }
	}
	form3(17);
	//==============================
	
	function form4(phone){
	  if ( phone.length <= 0) {
	console.log("Phone is missing");
	}
	  if(typeof(phone) !== 'String'){
		console.log("Phone must be a string");
	  }else{
		console.log("");
	  }
	}  
	  form4("9017991161");
	}
	
	
	