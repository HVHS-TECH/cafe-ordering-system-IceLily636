const USER = {}
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput(){
let NAME_FIELD = document.getElementById("nameField");
USER.name = NAME_FIELD.value;
OUTPUT.innerHTML += "<p>Your name is"+ USER.name+"</p>";}