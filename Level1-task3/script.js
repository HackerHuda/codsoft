function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    var currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(currentValue);
}

function calculatePower() {
    var currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = currentValue * currentValue;
}