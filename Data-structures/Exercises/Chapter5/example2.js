document.getElementById('btn').addEventListener('click',)


//Example5.2

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
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

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

var names = ['F Allison McMillan', 'M Frank Opitz', 'M Mason McMillan', 'M Clayton Ruff', 'F Cheryl Ferenback', 'M Raymond Williams', 'F Jennifer Ingram', 'M Bryan Frazer', 'M David Durr', 'F Aurora Adney']

var maleDancers = new Queue();
var femaleDancers = new Queue();

function getDancers(males, females) {
    for (var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            femaleDancers.enqueue(new Dancer(name, sex));
        }
        else {
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}

//Run

function noDancePartner() {
    getDancers(maleDancers, femaleDancers);
    dance(maleDancers, femaleDancers);
    if (!femaleDancers.empty()) {
        console.log(femaleDancers.front().name + " is waiting to dance.");
    }
    if (!maleDancers.empty()) {
        console.log(maleDancers.front().name + " is waiting to dance.");
    }
}

function noDancePartner() {
    getDancers(maleDancers, femaleDancers);
    dance(maleDancers, femaleDancers);
    if (!femaleDancers.empty()) {
        console.log(femaleDancers.front().name + " is waiting to dance.");
    }
    if (!maleDancers.empty()) {
        console.log(maleDancers.front().name + " is waiting to dance.");
    }
}

//Example5.3 (Works with example 5.2's data)
//Run
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() +
        " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() +
        " female dancers waiting to dance.");
}

//Example5.4

function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        putstr(arr[i] + " ");
    }
}

// main program
var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}

var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

function beforeAfterRadixSort() {
    console.log("Before radix sort: ");
    dispArray(nums);
    distribute(nums, queues, 10, 1);
    collect(queues, nums);
    distribute(nums, queues, 10, 10);
    collect(queues, nums);
    console.log("\n\nAfter radix sort: ");
    dispArray(nums);
}

//Priorty queues

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}


//Example 5.5

var p = new Patient("Smith", 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());