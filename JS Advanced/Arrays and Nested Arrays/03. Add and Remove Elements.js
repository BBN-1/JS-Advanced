function addRemove(arr) {
    let array = arr;
    let newArr = [];
  
    for (let i = 0; i < array.length; i++) {
      let currentCommand = array[i];
  
      if (currentCommand === "add") {
        newArr.push(i + 1);
      } else if (currentCommand === "remove") {
        newArr.pop();
      }
    }
  
    if (newArr.length === 0) {
      console.log("Empty");
    } else if (newArr.length > 0) {
      console.log(newArr.join("\n"));
    }
  }
  