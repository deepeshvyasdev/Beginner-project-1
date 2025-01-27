let numClicked = document.querySelectorAll(".num");
let dis = document.querySelector(".calc_display");
let opClicked = document.querySelectorAll(".op_btns");
let ac = document.querySelector("#ac");
let currentInput = "";
let previousInput = "";
let operator = "";

// Number buttons click handler
numClicked.forEach(num => {
    num.addEventListener("click", () => {
        currentInput += num.innerText;
        dis.innerText = currentInput;
    });
});

// Operator buttons click handler
opClicked.forEach(op => {
    op.addEventListener("click", () => {
        const opr = op.innerText;

        if (opr === "=") {
            if (previousInput && currentInput && operator) {
                const result = calculate(Number(previousInput), Number(currentInput), operator);
                dis.innerText = result;
                previousInput = result;
                currentInput = "";
                operator = "";
            }
        } else if (opr === "C") {
            // Clear all
            currentInput = "";
            previousInput = "";
            operator = "";
            dis.innerText = "";
        } else {
            // Store the operator and prepare for the next number
            if (currentInput) {
                previousInput = currentInput;
                currentInput = "";
                operator = opr;
                dis.innerText += opr;
            }
        }
    });
});
ac/addEventListener('click',()=>{
    
})

// Calculation function
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error: Div by 0";
        default:
            return "Error";
    }
}
