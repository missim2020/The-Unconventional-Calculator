let defaultResult = 0;
currentResult = defaultResult;

function add () {
let enteredNumber = parseInt(userInput.value);
let calcDescription =  currentResult + "+" +  enteredNumber;
 //let calcDescription = `${currentResult} + ${enteredNumber}`  // result is the same like above
 currentResult = currentResult + enteredNumber;
 outputResult(currentResult, calcDescription);
}

function subtract(){
let enteredNumber = parseInt(userInput.value);
let calcDescription =  currentResult + "-" +  enteredNumber;
//let calcDescription = `${currentResult} - ${enteredNumber}`  // result is the same like above
currentResult = currentResult - enteredNumber;
outputResult(currentResult, calcDescription);
}

function multiply(){
    let enteredNumber = parseInt(userInput.value);
    let calcDescription =  currentResult + "*" +  enteredNumber;
    //let calcDescription = `${currentResult} * ${enteredNumber}`  // result is the same like above
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);

}

function divide(){
    let enteredNumber = parseInt(userInput.value);
    let calcDescription =  currentResult + "/" +  enteredNumber;
    //let calcDescription = `${currentResult} / ${enteredNumber}`  // result is the same like above
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
}


addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

