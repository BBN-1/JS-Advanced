function calorieObject(arr) {
    let array = arr;
    let foodStat = {};
  
    for (let i = 0; i < array.length - 1; i++) {
      let currentEl = array[i];
      if (i % 2 === 0) {
        foodStat[currentEl] = Number(array[i + 1]);
      }
    }
  
    console.log(foodStat);
  }