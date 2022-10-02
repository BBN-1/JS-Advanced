function cooking(num, str1, str2, str3, str4, str5) {
    let numToEdit = Number(num);
    let commandStr = str1 + "," + str2 + "," + str3 + "," + str4 + "," + str5;
    let commandArr = commandStr.split(",");
  
    for (let line of commandArr) {
      let command = line;
  
      if (command === "chop") {
        numToEdit /= 2;
        console.log(numToEdit);
      } else if (command === "dice") {
        numToEdit = Math.sqrt(numToEdit);
        console.log(numToEdit);
      } else if (command === "spice") {
        numToEdit += 1;
        console.log(numToEdit);
      } else if (command === "bake") {
        numToEdit *= 3;
        console.log(numToEdit);
      } else if (command === "fillet") {
        numToEdit = numToEdit - numToEdit * 0.2;
        console.log(numToEdit);
      }
    }
  }