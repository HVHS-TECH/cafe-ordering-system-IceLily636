console.log("Hello, World!");
const OUTPUT = document.getElementById("JavaScriptOutput");
const menuItems = [
    { name: "Sakura Mochi", price: 5.00, image: "Images/cafe item 1.png" }
    { name: "Chocolate", price: 20.00 },
    { name: "Universal Peace", price: 7.00 },
    { name: "Rainbow Macaroons", price: 15.00 }
];
console.log("Hello");


for( i=0; i<menuItems.length; i++) {
OUTPUT.innerHTML += "<br>" +menuItems[i].name+ " - $" + menuItems[i].price + "<br>";

}