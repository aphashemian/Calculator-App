
let current = "";
let valueCurrent = 0;
let currentEl = document.getElementById("display-el");

function pressNumber(key)
{
  current+= key;
  currentEl.textContent += key;
  valueCurrent = parseInt(current);
}

function save()
{
  let countStr = count + " - ";
  pastNumber.textContent += countStr;
  console.log(count);
  count = 0;
  countEl.textContent = count;
}
