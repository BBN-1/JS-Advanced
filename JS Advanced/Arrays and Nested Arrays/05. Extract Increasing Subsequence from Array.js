function extractIncr(arr) {
    let array = arr;
    let newArr = [arr[0]];
  
    for (let i = 1; i < array.length; i++) {
      let currentEl = array[i];
  
      if (currentEl >= array[i - 1]) {
        newArr.push(currentEl);
      }
    }
  
    return newArr
  }
  