function mySet() {
    this.collection = []; // the var collection will hold the set
    this.has = has;
    this.values = values;
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersection = intersection;
    this.difference = difference;
    this.subset = subset;
}
  // this method will check for the presence of an element and return true or false

function has(element) {
    return this.collection.indexOf(element) !== -1;
};
  // this method will return all the values in the set

function values() {
    return this.collection;
};
  // this method will add an element to the set

function add(element) {
    if (!this.has(element)) {
        this.collection.push(element);
        return true;
    }
    return false;
};
  // this method will remove an element from a set

function remove(element) {
    if (this.has(element)) {
        index = this.collection.indexOf(element);
        this.collection.splice(index, 1);
        return true;
    }
    return false;
};
  // this method will return the size of the collection

function size() {
    return this.collection.length;
};
  // this method will return the union of two sets

function union(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
        unionSet.add(e);
    });
    secondSet.forEach(function (e) {
        unionSet.add(e);
    });
    return unionSet;
};
  // this method will return the intersection of two sets as a new set

function intersection(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
            intersectionSet.add(e);
        }
    });
    return intersectionSet;
};
  // this method will return the difference of two sets as a new set

function difference(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
            differenceSet.add(e);
        }
    });
    return differenceSet;
};
  // this method will test if the set is a subset of a different set

function subset(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
        return otherSet.has(value);
    });
};