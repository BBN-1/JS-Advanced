function listNames(arr) {
    let array = arr;
    array.sort();
  
    for (let i = 0; i < array.length; i++) {
      let currentEl = array[i];
      let currentNum = i + 1;
  
      console.log(`${currentNum}.${currentEl}`);
    }
  }