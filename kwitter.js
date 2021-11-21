function addUser()
{
user_name=document.getElementById("user_name").ariaValueMax;
ocalStorage.setItem("user_name", user_name); 
window.location = "kwitter_page.html";
}