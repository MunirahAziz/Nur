function formValidation()
{
var uname = document.registration.username;
var uid = document.registration.userid;
var uadd = document.registration.address;
var uadds = document.registration.haddress;
var uemail = document.registration.email;
var passid = document.registration.passid;

if(allLetter(uname))
{
if(userid_validation(uid))
{
if(alphanumeric(uadd))
{
if(alphanumerics(uadds))
{

if(ValidateEmail(uemail))
{
if(passid_validation(passid,7,12))
{	
}

}
}
}
}
}



return false;


} function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;

var numbers = /^[0-9]+$/;
if(uid.value.match(numbers))
{
  if (uid_len != 7)
  {
    alert("Matric no should not be empty / length should be 7 characters");
    uid.focus();
    return false;
  }
  return true;
}
else
{
  alert("Matric no must have numeric characters only");
  uid.focus();
  return false;
}
return true;
}


function allLetter(uname)
{
var letters = /^[A-Za-z\s]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert("Name must have alphabet characters only");
uname.focus();
return false;
}
}


function alphanumeric(uadd)
{
var letters = /^[0-9a-zA-Z\.\-\s\,\/]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('You have entered wrong character');
uadd.focus();
return false;
}
}

function alphanumerics(uadds)
{
var letters = /^[0-9a-zA-Z\.\-\s\,\/]+$/;
if(uadds.value.match(letters))
{
return true;
}
else
{
alert('You have entered wrong character');
uadds.focus();
return false;
}
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
//password constraints
function passid_validation(passid,mx,my)
{
  var passid_len = passid.value.length;
  if (passid_len == 0 ||passid_len >= my || passid_len < mx)
  {
      alert("Password should not be empty / length be between "+mx+" to "+my);
      passid.focus();
      return false;
  }
  return true;
}

