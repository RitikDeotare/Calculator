let currentInput = '';
let outputElement = document.getElementById('output');
function appendToDisplay(value) {
    currentInput += value;
    outputElement.innerText = currentInput;    
}
function clearDisplay(params) {
    currentInput = '' ;
    outputElement.innerText = '0';
}
function calculate() {
    try {
        let result = eval(currentInput);
        if ( isNaN (result) || !isFinite (result) ){
            throw 'Invalid Input';
        }
        currentInput = result.toString();
        outputElement.innerText = currentInput;
    } catch (error){
        currentInput = '';
        outputElement.innerText = 'Error';
    }
}