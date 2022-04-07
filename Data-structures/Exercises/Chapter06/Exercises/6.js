function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
    this.advance = advance;
}

function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.removeN = removeN;
}
function display() {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        !(currNode.next.element == "head")) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function advance(n){
    while(i < n + 1){
        var currNode = this.head;
        currNode = currNode.next;
        ++i
    }
}

function removeN(n){
    while(n){}
}