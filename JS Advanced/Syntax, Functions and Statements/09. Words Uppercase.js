function wordsUpper(str) {
    let regEx = /[a-zA-Z]+/g;
    let valid;
    let validArr = [];
  
    while ((valid = regEx.exec(str)) !== null) {
      validArr.push(valid[0]);
    }
  
   toUpperStr = validArr.join(", ").toUpperCase()
   console.log(toUpperStr);
   
  
  
  }