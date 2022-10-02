function sortingNumbers(arr) {
    let array = arr;
    let sortedArr = array.sort(function (a, b) {
      return a - b;
    });
    let newArr = [];
  
    for (let i = 0; i < sortedArr.length; i++) {
      let smallestNum = sortedArr.shift();
      //newArr.push(smallestNum);
      let biggestNum = sortedArr.pop();
      newArr.push(smallestNum, biggestNum);
    }
  
    let resultArr = newArr.concat(sortedArr);
    return resultArr;
  }