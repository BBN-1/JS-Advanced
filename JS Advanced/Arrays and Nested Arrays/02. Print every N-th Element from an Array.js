function everyNelementh(arr, num) {

    let array = arr;
    let element = num;
    let newArr = []  
  
  
    for (let i = 0; i < array.length; i += element) {
        let currentNum = array[i]
        newArr.push(currentNum)
        
    }
  
    return newArr
  
  }