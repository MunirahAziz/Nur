function formValidation()
{
	
	var uname = document.registration.uname;
	var matricNo = document.registration.matricNo;
	var phoneNum = document.registration.phoneNum;

	if(uname_validation(uname))
	{
		if(matricNo_validation(matricNo)){
			if(phoneNum_validation(phoneNum)){
				
			}
		}
	}
return false;
}

function uname_validation(uname){
	
}

function matricNo_validation(matricNo){

	var numbers = /^[0-9]+$/;
	if(matricNo.value.match(numbers))
	{
	  if (matricNo.value.length != 7)
	  {
	    alert("Matric no should not be empty / length should be 7 characters");
	    matricNo.focus();
	    return false;
	  }
	  return true;
	}
	else
	{
	  alert("Matric no must have numeric characters only");
	  matricNo.focus();
	  return false;
	}
	return true;
}


function phoneNum_validation(phoneNum)
{
var phoneNum_len = phoneNum.value.length;

var numbers = /^[0-9]+$/;
if(phoneNum.value.match(numbers))
{
  if (phoneNum.value.length == 0 || phoneNum.value.length < 10)
	  {
	    alert("Invalid length");
	    PhoneNum.focus();
	    return false;
	  }
	  return true;
}
else
{
  alert("Phone no must have numeric characters only");
  phoneNum.focus();
  return false;
}
return true;
}
