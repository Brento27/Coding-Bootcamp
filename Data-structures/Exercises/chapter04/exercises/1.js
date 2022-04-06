document.getElementById('btn').addEventListener('click', run)

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.check = check;
    this.length = length;
    //this.empty = empty;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    this.dataStore.pop();
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
    this.dataStore = [];
}

function check(expr){
    o = new Stack;
    c = new Stack;
for( var i =0; i < expr.length; i++){
    if (expr.charAt(i) === "("){
        o.push(i)
        c.pop();
    }
    else if (expr.charAt(i) === ")"){
        o.pop();
        c.push(i);
    }
}
if (o.dataStore.length > 0){
    console.log("There is a closing parentheses missing at these indexes " + o.dataStore)
}
else if (c.dataStore.length > 0){
    console.log("There is a opening parentheses missing at these indexes " + c.dataStore)
}
else {
    console.log("There are no errors")
}
o.clear();
c.clear();
}


var expr = '((2.3 + 23 / 12 + (3.1415 * .24))';


function run(){
    check(expr)
}
