function add(x, y) {
    return +x + +y;
};

function subtract(x, y) {
    return +x - +y;
};

function multiply(x, y) {
    return +x * +y;
};

function divide(x, y) {
    if (y == 0)
    {
        return "You destroyed the universe!";
    } else return +x/+y;
};

function display(string) {
    result.textContent += string;
};

let num1 = "";
let num2 = "";
let operator = "";
let btnValue = "";
let decimalToggle = false;
let answer = "";
let equalsFlag = false;
let operatorFlag = false;

const numberBtn = document.querySelector(".numbers");
const operateBtn = document.querySelector(".operators")
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const result = document.querySelector("#display");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");

buttons.forEach((e) => {
    e.addEventListener("click", () => {
        btnValue = e.innerHTML;
    });
});

numberBtn.addEventListener("click", () => {
    operatorFlag = false;
    if (equalsFlag == true) {
        clearDisplay();
        clearMemory();
        equalsFlag = false;
    };
    if (operator === "") {
        num1 += btnValue;
    } else {
        num2 += btnValue;
    };
    display(btnValue);
});

operateBtn.addEventListener("click", () => {
    equalsFlag = false;
    decimalToggle = false;
    operatorFlag = true;
    if (operator === "") {
        operator = btnValue;
    } else {
        operate();
        operator = btnValue;
    }
    display(btnValue);
});

backspace.addEventListener("click", () => {
    if (equalsFlag == true || operatorFlag == true) {
//do nothing
    } else if (num2 == "") {
        num1 = num1.slice(0, -1);
        clearDisplay();
        display(num1);
    } else {
        num2 = num2.slice(0, -1);
        clearDisplay();
        display(num1);
        display(operator);
        display(num2);
    };
});

decimal.addEventListener("click", () => {
    if (decimalToggle == true) {
    } else {
        if (num2 == "") {
            num1 += btnValue;
            display(btnValue);
        } else {
            num2 += btnValue;
            display(btnValue);
        };
        decimalToggle = true;
    };
});

clearBtn.addEventListener("click", () => {
    clearDisplay();
    clearMemory();
    decimalToggle = false;
    operatorFlag = false;
    equalsFlag = false;
});

equalsBtn.addEventListener("click", () => {
    if (num1 == "" || num2 == "" || operator == "") {
//do nothing
    } else {
        operate();
        equalsFlag = true;
    };
});

function operate() {
    if (operator === "+")
    {
        answer = add(num1, num2);
    } else if (operator === "-")
    {
        answer = subtract(num1, num2);
    } else if (operator === "x")
    {
        answer = multiply(num1, num2);
    } else if (operator === "/")
    {
        answer = divide(num1, num2);
    };
    clearDisplay();
    clearMemory();
    answer = Math.round(answer * 100) / 100;
    display(answer);
    num1 = answer;
}

function clearDisplay() {
    result.textContent = "";
}

function clearMemory() {
    num1 = "";
    num2 = "";
    operator = "";
}