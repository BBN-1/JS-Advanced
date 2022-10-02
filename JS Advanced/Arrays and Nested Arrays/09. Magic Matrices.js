function magic(arr) {
    let array = arr;
  
    
    
  
    let sumT = array[0].reduce((a,b) => a+b) 
    for (let i = 0; i < array[0].length; i++) {
      let columnSum = 0;
  
      for (let j = 0; j < array.length; j++) {
          columnSum += array[j][i];
      }
      
      if (columnSum !== sumT) {
          return false;
        } 
         
    }
  
   
    return true
  }