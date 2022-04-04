document.getElementById('btn').addEventListener('click', run)

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.check = check;
    this.length = length;
    this.empty = empty;
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

function length() {
    return this.top;
}

s = new Stack
var i = 0
symbolString = new Stack
var symbols = ['(', '(', ')', ')', '(', '(', '(', '(', ')', ')']

function splitAndAdd(element) {
    for (i = 0; i < element.length; ++i)
        symbolString.push(element[i])
}

function check() {
    var balanced = true
    while (i < symbolString.dataStore.length, balanced === true) {
        symbol = symbolString.dataStore[i]
        if (symbol == "(") {
            s.push(symbol)
        }
        else {
            if (s.empty()) {
                balanced = false
            }
            else {
                s.pop()
            }
        }
        i = i + 1
    }
    if (balanced = true, s.empty()) {
        return true
    }
    else {
        return false
    }

}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function run() {
    splitAndAdd(symbols)
    symbolString.check()
}