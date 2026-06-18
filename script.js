console.log("Hello, World!");
let change
let order
function calculateChange(_money, _price){
let _change = _money - _price
return _change;
}
const USER ={};
const OUTPUT = document.getElementById("JavaScriptOutput");
//menu items
const menuItems = [
    { Item:1, name: "Sakura Mochi", price: 9.00, image: "Images/cafeitem1.png" },
    { Item:2, name: "Chocolate", price: 20.00, image: "Images/cafeitem2.png"},
    { Item:3, name: "Universal Peace", price: 7.00,image: "Images/cafeitem2.png" },
    { Item:4, name: "Rainbow Macaroons", price: 15.00,image: "Images/cafeitem2.png" }
];
console.log("Hello");
//get user data and welcome
function getFormInput(){
const NAME_FIELD = document.getElementById("nameField");
USER.name = NAME_FIELD.value;
if(USER.name.length < 3){
OUTPUT.innerHTML="<p>ADD MORE LETTERS </p>"
}
else{
    OUTPUT.innerHTML += "<h1>Welcome to Teyvat Treasures " +USER.name+ "</h1>"
}
//show money amount
const MONEY_FIELD = document.getElementById("moneyField");
USER.money = Number(MONEY_FIELD.value);
OUTPUT.innerHTML += "<h2>You have " +USER.money+ " dollars</h2>"
}
// get item details
function getItemFormInput(){
const ORDER_FIELD = document.getElementById("orderField")
order = Number(ORDER_FIELD.value)
console.log("Heliugbuilo");
OUTPUT.innerHTML+="<p>You have ordered "+menuItems[order].name+"</p>";
//receipt 
if(USER.money >= menuItems[order].price){
    OUTPUT.innerHTML +="<p>You have recived " +menuItems[order].name+ "</p>"
    change = calculateChange(USER.money, menuItems[order].price)
    OUTPUT.innerHTML +="<p>Your change is " +change+ "Dollars</p>"
}
else{
    OUTPUT.innerHTML +="<p>A chocolate bar is 4 dollars ,you cant afford it.</p>"
}
}

// show item image
for( i=0; i<menuItems.length; i++) {
OUTPUT.innerHTML += "<img src="+menuItems[i].image+" width=400>";
OUTPUT.innerHTML += "<h3>"+menuItems[i].name+ " - $" + menuItems[i].price + "</h3>";

}
