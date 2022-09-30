function validate()
{
var email=document.getElementById("user-email").value;
var password=document.getElementById("user-pass").value;
if(email=="admin@yahoo.com"&& password=="user")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}
}
