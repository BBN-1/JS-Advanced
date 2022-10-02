function heroicInv(arr) {
    let heroInfoArr = arr;
    let resArray = [];
  
    for (let line of heroInfoArr) {
      
       let [name, level, items ] = line.split(" / ")
  
       level = Number(level)
       if(items){
           items = items.split(", ")
       }else{
           items = []
       }
       
     
       resArray.push({name,level,items})
  
      
    }
    
    console.log(JSON.stringify(resArray));
  }