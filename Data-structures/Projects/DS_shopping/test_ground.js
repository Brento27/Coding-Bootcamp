//Created empty array's for storing objects and items

var stock = [];
var cart = [];
var orders = [];

//Created a variable to calculate the cart total

var totalOrderAmt = 0;
var current_user = 0;
var current_user_index = 0;

//Created stock item class for easy adding of items (With id, name and price)

class Stock_item {

    constructor(stock_id, stock_name, price) {
        this.stock_id = stock_id;
        this.stock_name = stock_name;
        this.price = price;
    }
}

//Created a cart item class to easily add items to the cart

class Cart_item { // rows in the cart table will each be a cart item

    constructor(stock_id, quantity) {//remeber user id later
        //   this.user_id = user_id;
        this.stock_id = stock_id;
        this.quantity = quantity;
    }
}

// This is a user class which is not yet implemented

class User {

    constructor(user_id, name, surname) {
        this.user_id = user_id;
        this.name = name;
        this.surname = surname;
    }
}

// //Creating users

let users = [
    new User(1, "Brent", "Lombaard"),
    new User(2, "Dian", "Reinecke"),
    new User(3, "Ashleigh", "Kuhn")
];

// //Sign into user

Log_in();

function Log_in() {

    var login_input = parseInt(prompt("What is your user id?"));
    let index = seqSearchUser(users, login_input)
    while (login_input !== current_user) {
        if (index > -1) {
            alert("Welcome " + users[index].name + " " + users[index].surname + " enjoy your shopping!!")
            login_input = current_user;
        } else {
            login_input = parseInt(prompt("The user id " + login_input + " does not exist. Please use another user id."));
            index = seqSearch(users, login_input)
        }
    }
    current_user_index = index;
}

// 1. in the beginning, populate the stock array with 10 items

//Creating stock items

let stock_item_1 = new Stock_item(1, "Anchovy Toast", 23);
let stock_item_2 = new Stock_item(2, "Marmite Toast", 16);
let stock_item_3 = new Stock_item(3, "Healthy Times Breakfast", 51);
let stock_item_4 = new Stock_item(4, "Mini Breakfast", 44);
let stock_item_5 = new Stock_item(5, "Pinewoods Favourite Breakfast", 51);
let stock_item_6 = new Stock_item(6, "English Breakfast", 75);
let stock_item_7 = new Stock_item(7, "Patty Breakfast", 75);
let stock_item_8 = new Stock_item(8, "Scrambled Breakfast", 40);
let stock_item_9 = new Stock_item(9, "Pita Breakfast", 45);
let stock_item_10 = new Stock_item(10, "Halloumi Breakfast", 64);
let stock_item_11 = new Stock_item(11, "Basic Omeltte", 32);

//Adding stock items to an stock array to display on website

stock.push(stock_item_1, stock_item_2, stock_item_3, stock_item_4, stock_item_5, stock_item_6, stock_item_7, stock_item_8, stock_item_9, stock_item_10, stock_item_11);

// 2. display the stock array to the user

function display_all() {

    var myTable = "<table><th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Code</th>";
    myTable += "<th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Item</th>";
    myTable += "<th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Price</th>";
    myTable += "<th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Quantity</th>";
    myTable += "<th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Total</th>";
    myTable += "<th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Add</th>";
    myTable += "<th style='width: 100px; color: #853100; text-align: right; border-color: #853100'>Remove</th>";

    for (i = 0; i < stock.length; i++) {//Adding rows to my menu

        // if statement to check if the selected stock item is in the cart, if not then the quantity will
        // return 0 otherwise it will return the quantity that is in the cart
        var index = seqSearch(cart, stock[i].stock_id)
        if (index == -1) {
            quantity = 0;
        }
        else {
            quantity = cart[index].quantity
        }
        myTable += "<tr><td style='width: 100px; text-align: right; color : #e63b10; border-color: #853100'><b>" + stock[i].stock_id + "</b></td>";
        myTable += "<td style='width: 100px; text-align: right; color : #e63b10; border-color: #853100'><b>" + stock[i].stock_name + "</b></td>";
        myTable += "<td style='width: 100px; text-align: right; color : #e63b10; border-color: #853100'><b>R" + stock[i].price + "</b></td>";
        myTable += "<td style='width: 100px; text-align: right; color : #e63b10; border-color: #853100'><b>" + quantity + "</b></td>";
        myTable += "<td style='width: 100px; text-align: right; color : #e63b10; border-color: #853100'><b>R" + quantity * stock[i].price + "</b></td>";
        myTable += "<td style='border-color: #853100'><button onclick='add_selection(" + i + ")' style= 'color : #853100; background-color : #ffcc7a; border-color : #964d3b'><b>Add</b></button></td>";
        myTable += "<td style='border-color: #853100'><button onclick='remove_selection(" + i + ")' style= 'color : #853100; background-color : #ffcc7a; border-color : #964d3b'><b>Remove</b></button></td>";
    }

    myTable += "</table>";

    document.getElementById("demo").innerHTML = myTable;
}

// 3. let the user select the item and quantity

// 4. do an insert into the cart array representing the selection

function add_selection(x) {
    var index = seqSearch(cart, stock[x].stock_id) //Searching if the stock element is already in the cart
    if (index == -1) {// if it is not create a new cart element and add it to the cart
        cart[cart.length] = new Cart_item(stock[x].stock_id, parseInt(prompt("How many would you like to add to cart")));//Adding stock_id and quantity to cart item and putting it in the cart
        totalOrderAmt += cart[cart.length - 1].quantity * stock[x].price; //Adding subtotal to order Amount
    }
    else { // if it is in the cart update the quantity
        totalOrderAmt -= cart[index].quantity * stock[x].price; //Remove old quantity price
        cart[index].quantity = parseInt(prompt("How many would you like to add to cart"))//Update quantity
        totalOrderAmt += cart[index].quantity * stock[x].price;// Add new subtotal based on new quantity
    }
    items_in_cart = "";// Removes the view of what is in your cart as your still editing your cart
    document.getElementById("order").innerHTML = "";
    check_cart();
    display_all();//refreshing menu
}

function remove_selection(x) {
    var index = seqSearch(cart, stock[x].stock_id) //Searching if the stock element is already in the cart
    if (index !== -1) { // if it is in the remove the cart object from the cart with splaice()
        totalOrderAmt -= cart[index].quantity * stock[x].price; //subtracts removed cart object from the total order amount
        cart.splice(index, 1)
    }
    else { // if it is not do nothing
        return;
    }
    document.getElementById("order").innerHTML = "";
    check_cart();
    display_all();
}

// 5. display the cart contents

function check_cart() {
    if (cart.length > 0) { //Checks if items are in cart
        var in_cart = ""; //variable to simplify the output of the cart
        in_cart += "<b>~~~ Items in cart ~~~</b><br><br>";
        for (var i = 0; i < cart.length; ++i) { //looping through cart items
            var index = seqSearch(stock, cart[i].stock_id); // getting index of stock object that mathces the cart object
            in_cart += stock[index].stock_name + " * " + cart[i].quantity + " (subtotal = R" + stock[index].price * cart[i].quantity + " )<br>";
        }
    }
    in_cart += "<br><b>Total order amount = R" + totalOrderAmt + "</b>";
    document.getElementById("total").innerHTML = in_cart; //outputiing cart contents
}

// 6. is the user finished?

// 7. if yes, sheck out and store the cart selection in an order array and clear the cart

function displayTotal() {
    document.getElementById("total").innerHTML = ""
    document.getElementById("total").innerHTML += "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}

//button actions and functions to run

var checkout = document.getElementById("checkout")
checkout.addEventListener("click", add_order)

var items_in_cart = document.getElementById("display_orders")
items_in_cart.addEventListener("click", display_orders)

// 8. function to store order

function add_order() {
    var cart_lenth = cart.length;
    if (cart_lenth > 0) {
        var cart_order = {}; //creating a new object to store my order in
        var n = 1; // variable to differentiate between item keys
        var new_order_id = orders.length + 1; //creating a new order id
        cart_order["order id"] = new_order_id; //assigning new order id
        cart_order["user id"] = users[current_user_index].user_id; //assigning new order id
        document.getElementById("total").innerHTML = ""; // clearing my previos output here
        check_cart(); //displays your cart
        for (var i = 0; i < cart.length; ++i) { //looping through cart
            var index = seqSearch(stock, cart[i].stock_id); //getting index of stock object that mathces the cart object
            cart_order["Item " + n] = stock[index].stock_name; //adding stock name to object
            cart_order["Item " + n + " quantity"] = cart[i].quantity; //adding stock quantity to object
            n += 1;
        }
        cart_order["total"] = "R" + totalOrderAmt;
        document.getElementById("order").innerHTML = "<b>Thank you for your order it will be ready for collection shortly, Yay!!</b>";
        orders.push(cart_order); //Adding object to orders array
        totalOrderAmt = 0; //resetiing total
        cart = []; //resetiing cart
        display_all();
    }else{
        check_cart();
        document.getElementById("order").innerHTML = "You can't checkout because the cart is empty!!";
    }
}

//function to display all orders

function display_orders() {
    let display_order = ""
    for (i = 0; i < orders.length; ++i) { //loops through orders array
        for (const [key, value] of Object.entries(orders[i])) { //loops through objects in array
            display_order += `<b>${key} is ${value}</b>` + "<br>"; //outputs the keys and values of the objects
        }
        display_order += "<br>";
        document.getElementById("total").innerHTML = display_order;
    }
    document.getElementById("order").innerHTML = "";
}


































// Seq search function for stock id's

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i].stock_id == data) {
            return i;
        }
    }
    return -1;
}

// Seq search function for user id's

function seqSearchUser(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i].user_id === data) {
            return i;
        }
    }
    return -1;
}