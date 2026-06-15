console.log("Hello, World!");
const OUTPUT = document.getElementById("JavaScriptOutput");
const menuItems = [
    { name: "Sakura Mochi", price: 9.00, image: "Images/cafeitem1.png" },
    { name: "Chocolate", price: 20.00 },
    { name: "Universal Peace", price: 7.00 },
    { name: "Rainbow Macaroons", price: 15.00 }
];
console.log("Hello");

const NAME_FIELD = document.getElementById("nameField");
USER.name = NAME_FIELD.value;
if(USER.name.length < 3){
OUTPUT.innerHTML="<p>ADD MORE LETTERS </p>"
}
else{

for( i=0; i<menuItems.length; i++) {
OUTPUT.innerHTML += "<img src="+menuItems[0].image+" width=400>";
OUTPUT.innerHTML += "<h3>"+menuItems[i].name+ " - $" + menuItems[i].price + "</h3>";

}