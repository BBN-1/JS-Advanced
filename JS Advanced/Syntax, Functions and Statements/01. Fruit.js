function fruits(str, num1, num2) {
    let fruitType = str;
    let grams = num1;
    let pricePerKg = num2;
    let moneyNeeded = ((grams / 1000) * pricePerKg).toFixed(2);
  
    console.log(
      `I need $${moneyNeeded} to buy ${(grams / 1000).toFixed(
        2
      )} kilograms ${fruitType}.`
    );
  }