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
    return +x/+y;
};

function display(string) {
    if (string === "clear")
    {
        result.textContent = "";
    } else {
        result.textContent += string;
    };
};

let num1 = "";
let num2 = "";
let operator = "";
let btnValue = "";

const numberBtn = document.querySelector(".numbers");
const operateBtn = document.querySelector(".operators")
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");
const result = document.querySelector("#display");

buttons.forEach((e) => {
    e.addEventListener("click", () => {
        btnValue = e.innerHTML;
    });
});

numberBtn.addEventListener("click", () => {
    if (operator === "") {
        num1 += btnValue;
    } else {
        num2 += btnValue;
    };
    display(btnValue);
});

operateBtn.addEventListener("click", () => {
    operator = btnValue;
    display(btnValue);
});

clearBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    display("clear");
});

equalsBtn.addEventListener("click", () => {
    if (operator === "+")
    {
        num1 = add(num1, num2);
    } else if (operator === "-")
    {
        num1 = subtract(num1, num2);
    } else if (operator === "x")
    {
        num1 = multiply(num1, num2);
    } else if (operator === "/")
    {
        num1 = divide(num1, num2);
    };
    display("clear");
    num2 = "";
    display(num1);
});