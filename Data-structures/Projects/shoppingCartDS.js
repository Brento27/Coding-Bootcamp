function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.length = length;
}

function append(id, itemName, price) {
    this.dataStore[this.listSize++] = {"id": id , "itemName": itemName, "Price": price};
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(id, itemName, price, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, {"id": id , "itemName": itemName, "Price": price});
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}







function ShopCart() {
    this.datastore = [];
    this.add = add
}