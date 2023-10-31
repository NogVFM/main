const social = document.getElementById("logo");
var boolean = true;
social.addEventListener("click", blockSocial);

function blockSocial() {
if(boolean){
  document.querySelectorAll(".share")[0].style.display = "block";
  boolean = false;
}else{
  document.querySelectorAll(".share")[0].style.display = "none";
  boolean = true;
}
}