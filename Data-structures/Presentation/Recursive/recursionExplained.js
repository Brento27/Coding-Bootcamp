//Factorial iterative 

function factorialIterative(num) {
    let total = 1;
    let n = 1;
    document.write("Factorial iterative number input = " + num + "<br><br>");
    for (let i = num; i > 1; i--) {
        document.write("Loop " + n + "<br>Subtotal = " + total + "<br> Current number = " + i + "<br>" + total + " * " + i + "<br><br>")
        total *= i
        n += 1
    }
    document.write("The final calculated total is = " + total + " for factorial iterative<br><br>");
    return total;
}

//Factorial recursive

function factorialRecursive(num) {
    var n = 0;
    ++n;
    if (num === 1) {
        document.write("We have reached our base case statement which will now give us <br>back the value of 1 and work itself through the stack back to our initial stack<br><br>")
        return 1;
    } else {
        document.write("Created a new stack object<br>Current factorial number = " + num + "<br>" + num + " * factorial(" + num + " - 1) = ?" + "<br>Stepping into next call and subtracting 1 from current factorial number<br><br>");
        var ret = num * factorialRecursive(num - 1);
        document.write("Call where current factorial number is = " + num + "<br>" + num +" * factorial(" + num + " - 1) = " + ret + "<br>Popped one stack object<br><br>");
        return ret;
    }
}

//Helper method recursion

function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

function run() {
    var input = parseInt(prompt("type a number"));
    factorialIterative(input);
    document.write("Our factorial recursive input = " + input + "<br><br>")
    document.write("Our total for factorial recursive is " + factorialRecursive(input));
};