console.log("Hello, World!");
//variables
let change
let order
function calculateChange(_money, _price){
let _change = _money - _price
return _change;
}
const USER ={};
const OUTPUT = document.getElementById("JavaScriptOutput");

let cartItems= [];

//menu items
const menuItems = [
    {  name: "Secret menu item", price:"UR SOUL", image: "Images/cafeitem1.png"},
    {  name: "Sakura Mochi", price: 9, image: "Images/cafeitem1.png" },
    {  name: "Chocolate", price: 20, image: "Images/cafeitem2.png"},
    {  name: "Universal Peace", price: 7,image: "Images/cafeItem3.png" },
    {  name: "Rainbow Macaroons", price: 15,image: "Images/cafeitem4.png" }
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
//add to cart
function getCartFormInput(){
const CART_FIELD = document.getElementById("cartField");
order = CART_FIELD.value;
OUTPUT.innerHTML +="<p>you have added " +menuItems[order].name+ "to your cart<p>"
cartItems.push(order)
console.log("buvybyby")
}
//checkout
function placeOrder(){
    OUTPUT.innerHTML= "<h1>Your recipt</h1>"
for( i=0; i<cartItems.length; i++){
    USER.money = USER.money - menuItems[cartItems[i]].price
}
//if user dosent have enough money
if (USER.money < 0){
OUTPUT.innerHTML += "<p>You cant afford this.</p>"
}
else{
   //if user has enough money 
for( i=0; i<cartItems.length; i++) {
OUTPUT.innerHTML += "<p>Thank you for ordering " +USER.name+ " You have paid " +USER.money+ "</p>"
OUTPUT.innerHTML += "<p>you have ordered " +menuItems[cartItems[i]].name+ ". This costs "+ menuItems[cartItems[i]].price +"</p>"

}
OUTPUT.innerHTML += "<p>Your change is " +USER.money+ "</p>"
}
}

// show item image
for( i=1; i<menuItems.length; i++) {
OUTPUT.innerHTML += "<img src="+menuItems[i].image+" width=400>";
OUTPUT.innerHTML += "<h3>"+menuItems[i].name+ " - $" + menuItems[i].price + "</h3>";

}
