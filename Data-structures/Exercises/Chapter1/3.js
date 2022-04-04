function weekTemps () {
    this.dataStore = [];
    this.add = add;
    this.average = average;


    function add(temp) {
        this.dataStore.push(temp);
        function average() {
        var total = 0;
        for (var i = 0; i < this.dataStore.length; ++i) {
        total += this.datastore[i];
        return total / this.dataStore.length;


var week1 = new weekTemps ();
var week2 = new weekTemps ();
var week3 = new weekTemps ();
var week4 = new weekTemps ();
           

for(var i = 0; i < 8; i++){
    myRandom - Math.floor (Math.random * 36);
    week1.add(myRandom);           
}

for(var i = 0; i < 8; i++){
    myRandom - Math.floor (Math.random * 36);
    week2.add(myRandom);           
}

for(var i = 0; i < 8; i++){
    myRandom - Math.floor (Math.random * 36);
    week3.add(myRandom);           
}

for(var i = 0; i < 8; i++){
    myRandom - Math.floor (Math.random * 36);
    week4.add(myRandom);           
}