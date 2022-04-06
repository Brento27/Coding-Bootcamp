//Exercises number 1

document.getElementById("btn").addEventListener("click", run)

function Queue() {
    this.dataStore = [];
    this.enqueueFront = enqueueFront;
    this.enqueueBack = enqueueBack;
    this.dequeueFront = dequeueFront;
    this.dequeueBack = dequeueBack;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueueBack(element) {
    this.dataStore.push(element);
}

function enqueueFront(element) {
    this.dataStore.unshift(element);
}

function dequeueFront() {
    return this.dataStore.shift();
}

function dequeueBack() {
    return this.dataStore.pop();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}

//Exercises number 2

var palindrome = "racecar"
PalArr = new Queue



function checkPalindrome() {
    for (var i = 0; i < palindrome.length; i++) {
        PalArr.enqueueBack(palindrome.charAt(i))
    }
    for (var i = 0; i < PalArr.dataStore.length; i) {
        if (PalArr.dataStore[i] == PalArr.back()) {
            PalArr.dequeueFront();
            PalArr.dequeueBack();
        }
    }
    if (PalArr.dataStore.length < 1) {
        console.log("String is a palindrome")
    }
    else {
        console.log("String is not a palindrome")
    }
}

function run(){
    checkPalindrome();
}