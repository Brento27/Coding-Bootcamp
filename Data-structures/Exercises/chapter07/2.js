function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}
function add(key, value) {
    this.datastore[key] = value;
}
function find(key) {
    return this.datastore[key];
}
function remove(key) {
    delete this.datastore[key];
}
//Exercise 3 Adding Sort
function showAll() {
    for(var key of Object.keys(this.datastore).sort()) {
        console.log(key + " : " + this.datastore[key]);
    }
}
function count() {
    var n = 0;
    for (var key of Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}
function clear() {
    for (var key of Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}

var text = "the brown fox jumped over the blue fox";
var TextArr = text.split(" ");
var stringCount = new Dictionary;

function run() {
    for (var i = 0; i < TextArr.length; i++) {
        if (stringCount.find(TextArr[i]) > 0) {
            var currKey = TextArr[i];
            stringCount.datastore[currKey] += 1;
        }
        else {
            stringCount.add(TextArr[i], 1)
        }
    }
    stringCount.showAll()
}