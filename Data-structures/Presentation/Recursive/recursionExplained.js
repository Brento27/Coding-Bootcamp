//Just an example of factorial

document.write("Example of factorial is 5! = 5 * 4 * 3 * 2 * 1 (! means factorial in math terms)<br><br>");

//This is our button run funtion to show recursive and iterative factorial functions

function run() {
    document.write("Example of factorial is 5! = 5 * 4 * 3 * 2 * 1 (! means factorial in math terms)<br><br>");
    var input = parseInt(prompt("Type a number to calculate their factorial value"));
    factorialIterative(input);
    document.write("<b>Our factorial recursive input = </b>" + input + "<br><br>")
    document.write("<b>Our total for factorial recursive is </b>" + factorialRecursive(input));
};

//This is where our called functions are stored

//Factorial iterative 

function factorialIterative(num) {
    let total = 1;
    let n = 1;
    document.write("<b>Factorial iterative number input = </b>" + num + "<br><br>");
    for (let i = num; i > 1; i--) {
        document.write("Loop " + n + "<br>Subtotal = " + total + "<br> Current number = " + i + "<br>Multiply subtotal by current number and this will be our new subtotal<br>" + total + " * " + i + "<br>Subtract 1 from current number<br><br>")
        total *= i
        n += 1
    }
    document.write("Our current number is now 1 so the factorial value is now calculated<br>The final calculated total is = " + total + " for factorial iterative<br><br>");
    return total;
}

//Factorial recursive

function factorialRecursive(num) {
    var n = 0;
    ++n;
    if (num === 1) {
        document.write("<b>We have reached our base case statement which will now give us <br>back the value of 1 and work itself through the stack back to our initial stack<br><br></b>")
        return 1;
    } else {
        document.write("Created a new stack object<br>Current factorial number = " + num + "<br>" + num + " * factorial(" + num + " - 1) = ?" + "<br>Stepping into next call and subtracting 1 from current factorial number<br><br>");
        var ret = num * factorialRecursive(num - 1);
        document.write("Call where current factorial number is = " + num + "<br>" + num +" * factorial(" + num + " - 1) = " + ret + "<br>Popped one stack object<br><br>");
        return ret;
    }
}

