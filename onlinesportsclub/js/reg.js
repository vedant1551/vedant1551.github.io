function myFunction() {
  var y = document.getElementById("pass");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}
function validate()
  {

    var ps1 = document.getElementById("pass");
    var ps2 = document.getElementById("cpass");
    if(ps1.value != ps2.value)
    {
      alert("Please Enter The Same password");
      return false;
    }
    else
    {
      alert("Registration Successfull");
      window.location.replace("index.html");
      return true;
    }  
}

