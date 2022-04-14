var stock = [];
var cart = [];
var orders = [];
var totalOrderAmt = 0;
// var stock_item = {"stock_id" : stock_id, "name"  : stock_name,  "price" : price};
// var cart_item = {"stock_id" : "stock_id", "quantity" : "quantity", "total" : "total"};
// var order_item = {"order_id" : order_id, "stock_id" : stock_id, "quantity" : quantity};

// 1. in the beginning, populate the stock array with 10 items

var stock_item_1 = { "stock_id": 1, "name": "Coca-Cola", "price": 15 };
var stock_item_2 = { "stock_id": 2, "name": "Pepsi", "price": 12 };
var stock_item_3 = { "stock_id": 3, "name": "Dr Pepper", "price": 17 };
var stock_item_4 = { "stock_id": 4, "name": "Mountain Dew", "price": 15 };
var stock_item_5 = { "stock_id": 5, "name": "Sprite", "price": 12 };
var stock_item_6 = { "stock_id": 6, "name": "Kit Kat", "price": 8 };
var stock_item_7 = { "stock_id": 7, "name": "Bar one", "price": 10 };
var stock_item_8 = { "stock_id": 8, "name": "Crunchie", "price": 7 };
var stock_item_9 = { "stock_id": 9, "name": "Nosh", "price": 12 };
var stock_item_10 = { "stock_id": 10, "name": "5 Star", "price": 8 };

stock.push(stock_item_1, stock_item_2, stock_item_3, stock_item_4, stock_item_5, stock_item_6, stock_item_7, stock_item_8, stock_item_9, stock_item_10);

var cart_item1 = { "stock_id": 1, "quantity": 0 };
var cart_item2 = { "stock_id": 2, "quantity": 0 };
var cart_item3 = { "stock_id": 3, "quantity": 0 };
var cart_item4 = { "stock_id": 4, "quantity": 0 };
var cart_item5 = { "stock_id": 5, "quantity": 0 };
var cart_item6 = { "stock_id": 6, "quantity": 0 };
var cart_item7 = { "stock_id": 7, "quantity": 0 };
var cart_item8 = { "stock_id": 8, "quantity": 0 };
var cart_item9 = { "stock_id": 9, "quantity": 0 };
var cart_item10 = { "stock_id": 10, "quantity": 0 };

cart.push(cart_item1, cart_item2, cart_item3, cart_item4, cart_item5, cart_item6, cart_item7, cart_item8, cart_item9, cart_item10);
// 2. display the stock array to the user

function display_all() {



    var myTable = "<table><th style='width: 100px; color: blue; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: blue; text-align: right;'>Remove</th>";

    for (i = 0; i < stock.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + stock[i].stock_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + stock[i].price + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + cart[i].quantity + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + cart[i].quantity * stock[i].price + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}
// 3. let the user select the item and quantity

// 4. do an insert into the cart array representing the selection

function add_selection(x) {
    cart[x].quantity = cart[x].quantity + 1;
    cart[x].total = stock[x].price * cart[x].quantity;
    totalOrderAmt += stock[x].price;

    display_all();
    displayTotal();
}

function remove_selection(x) {
    cart[x].quantity = cart[x].quantity - 1;
    if (cart[x].quantity < 0) {
        cart[x].quantity = 0;
        cart[x].total = stock[x].price * cart[x].quantity;
        display_all();
        displayTotal();

    } else {
        cart[x].total = stock[x].price * cart[x].quantity;
        totalOrderAmt -= stock[x].price;
        display_all();
        displayTotal();
    }
}

// 5. display the cart contents

function check_cart() {
    var in_cart = "";
    in_cart += "<b>Items in cart</b><br><br>";
    for (var i = 0; i < cart.length; ++i) {
        if (cart[i].quantity > 0) {
            in_cart += stock[i].name + " Quantity = " + cart[i].quantity + " (subtotal = R" + stock[i].price * cart[i].quantity + " )<br>";
        }
    }
    in_cart += "<br><b>Total order amount = R" + totalOrderAmt + "</b>";
    document.getElementById("total").innerHTML = in_cart;
}


// 6. is the user finished?

// 7. if yes, sheck out and store the cart selection in an order array and clear the cart

function displayTotal() {
    document.getElementById("total").innerHTML = ""
    document.getElementById("total").innerHTML += "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}

var checkout = document.getElementById("checkout")
checkout.addEventListener("click", add_order)

var items_in_cart = document.getElementById("items_in_cart")
items_in_cart.addEventListener("click", check_cart)

// 8. display all orders

function add_order() {
    var cart_order = {};
    var n = 1;
    var new_order_id = orders.length + 1;
    cart_order["order_id"] = new_order_id;
    document.getElementById("total").innerHTML = "";
    check_cart();
    for (var i = 0; i < cart.length; ++i) {
        if (cart[i].quantity > 0) {
            cart_order["stock_item_" + n] = stock[i].name;
            cart_order["stock_item_" + n + "_quantity"] = cart[i].quantity;
            n += 1;
            cart[i].quantity = 0;
        }
    }
    orders.push(cart_order);
    cart_order = {};
    totalOrderAmt = 0;
    display_all();
}

// 9. display all the orders

function display_orders() {
    var order_total = 0;
    for (i = 0; i < orders.length; ++i){
    for (const [key, value] of Object.entries(orders[i])) {
         document.write(`${key} => <b>${value}</b>` + "<br>");
         order_total += `${value}`;
    }
    document.write("<br>");
}

}