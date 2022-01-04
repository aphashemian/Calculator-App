
let current = "";
let valueCurrent = 0;
let currentEl = document.getElementById("display-el");
let state = "NONE";

function pressNumber(key)
{
  current+= key;
  currentEl.textContent += key;
  valueCurrent = parseInt(current);
  console.log(key);
}

function pressOperation(key)
{
  switch (key)
  {
    case "+": state = "ADD";
              break;
    case "-": state = "SUB";
              break;
    case "*": state = "MUL";
              break;
    case "/": state = "DIV";
              break;
  }

}

function solve()
{
  switch(state)
  {
    case "ADD":
    case "SUB":
    case "MUL":
    case "DIV": 
  }
}
function save()
{
  let countStr = count + " - ";
  pastNumber.textContent += countStr;
  console.log(count);
  count = 0;
  countEl.textContent = count;
}
