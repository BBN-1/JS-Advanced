function rotateArr(arr, num) {
    let array = arr;
    let rotatingNumber = num;
  
    for (let i = 0; i < rotatingNumber; i++) {
      let lastEl = array.pop();
      array.unshift(lastEl);
    }
  
    console.log(array.join(" "));
  }