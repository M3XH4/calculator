//Finding Elements
const calculatorButtons = document.querySelectorAll('.calc_button');
const display = document.getElementById('total_value');

//Initializing Variables
const operators = ["+", "-", "*", "/", ".", "%", "="];
let currentOperator = "";
let output = "";

//Assigning An Click Event Listener To Buttons
calculatorButtons.forEach(button => {    
    /*
        What This Means Is That For Each Calculator Button With
        Each Element Being Called button It Will Add An Event
        Listener With A Click Function. 
    */
    button.addEventListener('click', function(event) {
        /*
            Getting The Specific Value Of The Button Element Using The
            'data-value' In The HTML
        */
        let buttonValue = button.dataset.value;
        /*
            Calling Calculate Function And Putting the ButtonValue As The
            Value For The Parameter In The Function
        */
        calculate(buttonValue);
    });
});

//The Function For Calculator
function calculate(button_value) {
    console.log(button_value);

    //If User Clicks On Equals And Has Numbers And Operators On Output
    if(button_value === "=" && output !== "") {
        //If The Last Input Is A Operator Then It Will Display An Error Message
        if (operators.includes(output.slice(-1))) {
            window.alert("Please Input A Number After Operator Or Erase The Last Operator With No Number After.");
        } 
        //Performs The Operation
        else {
            output = eval(output.replace('%', "/100"));
            currentOperator = "";
        }
    }
    //If User Clicks Clear It Will Remove The Output And The Current Operator
    else if(button_value === "clear") {
        output = "";
        currentOperator = "";
    }
    //If User Clicks On Back It Will Erase The Last Input or Text On The Output
    else if(button_value === "back") {
        output = output.toString().slice(0, -1);
        currentOperator = "";
    }
    //If User Clicks An Operator
    else if(operators.includes(button_value)) {
        //Checking If Output Is Not Empty
        if(output !== "") {
            currentOperator = button_value;

            //If The Last Input Is An Operator It Will Erase The Last Input On
            //The Output, If The User Clicks On Another Operator
            if(operators.includes(output.slice(-1))) {
                output = output.slice(0, -1);
            }
            
            //Adding The Operator To The Output
            output += currentOperator;
        }
    } 
    //Fallback In Case Of Error
    else {
        if(output === "" && operators.includes(button_value)) {
            return "";
        }
        output += button_value;
    }
    //Displaying The Output On The Input With the ID display
    display.value = output;
}