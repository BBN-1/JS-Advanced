function townsToJSON(arr) {
    let townArrRes = [];
    let townInfo = {};
  
    arr.shift();
  
    for (let i = 0; i < arr.length; i++) {
      let tokens = arr[i].split("|");
      let name = tokens[1].trim();
      let latitude = (+tokens[2].trim()).toFixed(2);
      let longtitude = (+tokens[3].trim()).toFixed(2);
      
      
  
      let city = { Town: name, Latitude: Number(latitude), Longitude: Number(longtitude) };
      townArrRes.push(city);
    }
  
    console.log(JSON.stringify(townArrRes));
  }