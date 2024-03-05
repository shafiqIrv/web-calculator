const display = document.getElementById("screen");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const expression = display.value;
        const result = math.evaluate(expression);
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = formatResult(result);
        }
    } catch (error) {
        display.value = "Error";
    }
}


function deleteDisplay() {
    let currentValue = display.value;
    let newValue = currentValue.slice(0, -1);
    display.value = newValue;
}

function formatResult(result) {
    // Format the result to display a maximum of 10 digits
    let formattedResult = parseFloat(result.toFixed(10));
    return formattedResult;
}

// Additional feature: Keyboard support
document.addEventListener("keydown", function(event) {
    let key = event.key;
    if (key >= "0" && key <= "9") {
        appendToDisplay(key);
    } else if (key === ".") {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteDisplay();
    }
});
