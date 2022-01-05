// String, display.
let current = "";
let currentEl = document.getElementById("display-el");

//"Non-string number values"
let valueCurrent = 0;
let numberSeries = [];
let isNewValue = false;
var operation = "NONE";

function pressNumber(key)
{
  if (isNewValue)
  {
    current = "";
    currentEl.textContent = current;
    isNewValue = false;
  }

  current += String(key);
  currentEl.textContent = current;
  valueCurrent = parseInt(current);
  console.log(valueCurrent);
}

function pressOperation(key)
{
  switch (key)
  {
    case "+": operation = "ADD";
              console.log("add");
              break;
    case "-": operation = "SUB";
              break;
    case "*": operation = "MUL";
              break;
    case "/": operation = "DIV";
              break;
  }

  numberSeries.push(valueCurrent);
  isNewValue = true;

}

function solve()
{
  numberSeries.push(valueCurrent);
  let operandOne = numberSeries[numberSeries.length-2];
  let operandTwo = numberSeries[numberSeries.length-1];
  switch(operation)
  {
    case "ADD": soln = parseInt(operandOne) + parseInt(operandTwo);
                break;
    case "SUB": soln = parseInt(operandOne) - parseInt(operandTwo);
                break;
    case "MUL": soln = parseInt(operandOne) * parseInt(operandTwo);
                break;
    case "DIV": // check for div by zero.
                break;
  }
  operation = "NONE";
  console.log(soln);

  valueCurrent = parseInt(soln);
  numberSeries.push(valueCurrent);
  current = String(soln);
  currentEl.textContent = current;
}
