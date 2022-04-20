//Created empty array's for storing objects and items

var stock = [];
var cart = [];
var orders = [];

//Created a variable to calculate the cart total

var totalOrderAmt = 0;

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

//This is a user class which is not yet implemented

// class User {

//     constructor(user_id, password, name, surname) {
//         this.user_id = user_id;
//         this.password = password;
//         this.name = name;
//         this.surname = surname;
//     }
// }

// //Creating users

// let users = [
//     new User(1, 123, "Brent", "Lombaard"),
//     new User(2, 456, "Dian", "Reinecke"),
//     new User(3, 789, "Ashleigh", "Kuhn")
// ];

// //Sign into user

// Log_in();

// function Log_in() {
//     var i = 0;
//     var user_id_input = parseInt(prompt("Enter user id"));
//     var user_password_input = prompt("Enter password");
//     while(user_id_input !== users[i].user_id || user_password_input !== users[i].password)
//     var user_id_input = parseInt(prompt("Enter user id"));
//     var user_password_input = prompt("Enter password");
//     for (var i = 0; i < users.length; ++i) {
//         if (user_id_input == users[i].user_id || user_password_input === users[i].password) {
//             return;
//         } else { Log_in }
//     }
// }

// 1. in the beginning, populate the stock array with 10 items

//Creating stock items

let stock_item_1 = new Stock_item(1, "Coca-Cola", 15);
let stock_item_2 = new Stock_item(2, "Pepsi", 12);
let stock_item_3 = new Stock_item(3, "Dr Pepper", 17);
let stock_item_4 = new Stock_item(4, "Mountain Dew", 15);
let stock_item_5 = new Stock_item(5, "Sprite", 12);
let stock_item_6 = new Stock_item(6, "Kit Kat", 8);
let stock_item_7 = new Stock_item(7, "Bar one", 10);
let stock_item_8 = new Stock_item(8, "Crunchie", 7);
let stock_item_9 = new Stock_item(9, "Nosh", 12);
let stock_item_10 = new Stock_item(10, "5 Star", 8);

//Adding stock items to an empty array to display on website

stock.push(stock_item_1, stock_item_2, stock_item_3, stock_item_4, stock_item_5, stock_item_6, stock_item_7, stock_item_8, stock_item_9, stock_item_10);

// 2. display the stock array to the user

function display_all() {

    var myTable = "<table><th style='width: 100px; color: blue; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Remove</th>";

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
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].stock_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].stock_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>R" + stock[i].price + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantity + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>R" + quantity * stock[i].price + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
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
    display_all();//refreshing menu
    displayTotal();//refreshing total
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
    display_all();
    displayTotal();
}

// 5. display the cart contents

function check_cart() {
    if (cart.length > 0) { //Checks if items are in cart
        var in_cart = ""; //variable to simplify the output of the cart
        in_cart += "<b>Items in cart</b><br><br>";
        for (var i = 0; i < cart.length; ++i) { //looping through cart items
            var index = seqSearch(stock, cart[i].stock_id); // getting index of stock object that mathces the cart object
            in_cart += stock[index].stock_name + " Quantity = " + cart[i].quantity + " (subtotal = R" + stock[index].price * cart[i].quantity + " )<br>";
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

var items_in_cart = document.getElementById("items_in_cart")
items_in_cart.addEventListener("click", check_cart)

// 8. function to store order

function add_order() {
    var cart_order = {}; //creating a new object to store my order in
    var n = 1; // variable to differentiate between item keys
    var new_order_id = orders.length + 1; //creating a new order id
    cart_order["order_id"] = new_order_id; //assigning new order id
    cart_order["total"] = "R" + totalOrderAmt;
    document.getElementById("total").innerHTML = ""; // clearing my previos output here
    check_cart(); //displays your cart
    for (var i = 0; i < cart.length; ++i) { //looping through cart
        var index = seqSearch(stock, cart[i].stock_id); //getting index of stock object that mathces the cart object
        cart_order["Item_" + n] = stock[index].stock_name; //adding stock name to object
        cart_order["Item_" + n + "_quantity"] = cart[i].quantity; //adding stock quantity to object
        n += 1;
    }
    orders.push(cart_order); //Adding object to orders array
    totalOrderAmt = 0; //resetiing total
    cart = []; //resetiing cart
    display_all();
}

function display_orders() {
    for (i = 0; i < orders.length; ++i) {
        for (const [key, value] of Object.entries(orders[i])) {
            document.write(`${key} => <b>${value}</b>` + "<br>");
        }
        document.write("<br>");
    }

}


































// Seq search function

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i].stock_id == data) {
            return i;
        }
    }
    return -1;
}