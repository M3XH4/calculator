//Finding Elements
const calculatorButtons = document.querySelectorAll('.calc_button');
const display = document.getElementById('total_value');
const operators = ["+", "-", "*", "/", ".", "%", "="];
let currentOperator = "";
let output = "";

calculatorButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        let buttonValue = button.dataset.value;
        calculate(buttonValue);
    });
});

function calculate(button_value) {
    console.log(button_value);

    if(button_value === "=" && output !== "") {
        output = eval(output.replace('%', "/100"));
        currentOperator = "";
    }
    else if(button_value === "clear") {
        output = "";
        currentOperator = "";
    }
    else if(button_value === "back") {
        output = output.toString().slice(0, -1);
        currentOperator = "";
    }
    else if(operators.includes(button_value)) {
        if(output != "") {
            if (currentOperator) {
                output = output.toString().slice(0, -1) + button_value;
            }
            else {
                output += button_value;
                currentOperator = button_value;
            }
        }
    } else {
        if(output === "" && operators.includes(button_value)) {
            return "";
        }
        output += button_value;
    }
    //Display Output
    display.value = output;

}