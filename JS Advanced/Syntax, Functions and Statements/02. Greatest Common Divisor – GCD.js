function gcd(num1, num2) {
    let gcd;
    let number1 = num1;
    let number2 = num2;
  
    for (let i = 0; i <= number1 && i <= number2; i++) {
      if (number1 % i === 0 && number2 % i === 0) {
        gcd = i;
      }
    }
  
    console.log(gcd);
  }