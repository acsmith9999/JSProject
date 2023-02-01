const quantity = document.querySelector("#quantity");
var numberOfPizzas;
var cost;

const calculate = document.querySelector("#calculate");
calculate.addEventListener("click", checkInput);

/**
 * Validates the user input and calls the calculateCost function if valid
 * 
 */
function checkInput(){
    numberOfPizzas = parseInt(quantity.value);
    //check if user enters a number
    if(isNaN(numberOfPizzas)){
        alert("Must enter a number");
        return false;
    }
    //check if number is greater than zero
    else if(numberOfPizzas<=0){
        alert("Cannot order negative pizzas");
        return false;
    }
    //do the calculation
    else{ calculateCost(numberOfPizzas);}
}

/**
 * calculates the best deal for the customer based on the number ordered
 * @author Alex
 * @param {int} numberOfPizzas the number of pizzas ordered
 * @returns {int} the cost of the order
 */
//calculate the cost
function calculateCost(numberOfPizzas){
    //divide by 3. if zero remainder, multiply  by 14
    if(numberOfPizzas%3 ==0){
        cost = numberOfPizzas/3*14;
    }
    //if 2 remainder, find highest multiple of 3 and multiply by 14, add 12
    else if(numberOfPizzas%3 ==2){
        cost = ((numberOfPizzas-2)/3)*14 +12;
    }
    //if 1 remainder, find highest multiple of 3 and multiply 14, add 6.45
    else if (numberOfPizzas%3 ==1){
        cost = ((numberOfPizzas-1)/3)*14 + 6.45;
    }
    document.getElementById("message").innerHTML=numberOfPizzas + " pizzas costs $" + cost;
}










//Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned