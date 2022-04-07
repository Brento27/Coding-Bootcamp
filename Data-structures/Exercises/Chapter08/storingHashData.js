document.getElementById('button').addEventListener('click',run);

function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
}

function put(key, data) {
    var pos = this.betterHash(key);
    var index = 0;
    if (this.table[pos][index] == undefined) {
        this.table[pos][index + 1] = data;
    }
    else {
        while (this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index] = data;
    }
}

function get(key) {
    var index = 0;
    var hash = this.betterHash(key);
    if (this.table[pos][index] = key) {
        return this.table[pos][index + 1];
    }
    else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index + 1];
    }
    return undefined;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            print(i + ": " + this.table[i]);
        }
    }
}

function buildChains() {
    for (var i = 0; i < this.table.length; ++i) {
        this.table[i] = new Array();
    }
}

function run() {
    var hTable = new HashTable();
    hTable.buildChains();
    var someNames = ["David", "Jennifer", "Donnie", "Raymond",
        "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    for (var i = 0; i < someNames.length; ++i) {
        hTable.put(someNames[i]);
    }
    hTable.showDistro();
}