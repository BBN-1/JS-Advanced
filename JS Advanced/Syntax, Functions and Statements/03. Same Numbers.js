function sameNumbers(num) {
    let numberToCheck = num;
    let numAsArray = numberToCheck.toString().split("");
    let isSame = true;
  
    let numAsArr = numberToCheck.toString().split("");
    let reducer = (a, b) => Number(a) + Number(b);
  
    for (let i = 0; i < numAsArray.length - 1; i++) {
      let currentNum = Number(numAsArray[i]);
      let nextNum = Number(numAsArray[i + 1]);
  
      if (currentNum !== nextNum) {
        isSame = false;
        break;
      }
    }
  
    if (isSame) {
      console.log("true");
    } else {
      console.log("false");
    }
  
    console.log(numAsArr.reduce(reducer));
  }