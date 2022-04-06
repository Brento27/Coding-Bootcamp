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
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
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
}

function check(candy){
    withoutYellows = new Stack;
    for( var i = 0; i < candy.length; i++){
        if(candy[i] !== 'yellow'){
            withoutYellows.push(candy[i]);
        }
    }
    console.log(withoutYellows.dataStore);
    withoutYellows.clear;
}

var candy = ['red', 'white', 'yellow', 'white', 'yellow', 'red', 'red']


function run(){
    check(candy)
}