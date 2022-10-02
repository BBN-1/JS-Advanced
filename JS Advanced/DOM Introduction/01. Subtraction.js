function subtract(firstNumber, secondNumber) {
    let firstEl = document.getElementById("firstNumber");
    let secondEl = document.getElementById("secondNumber");
    let resultEl = document.getElementById("result");
  
    let firstElAsNum = Number(firstEl.value);
    let secondAsNum = Number(secondEl.value);
  
    let result = firstElAsNum - secondAsNum;
  
    resultEl.textContent = result;
  }