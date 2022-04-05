document.getElementById("btn1").addEventListener('click', run)

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

function run()