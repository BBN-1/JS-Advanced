function timeToWalk(num1, num2, num3) {
    let stepsNumber = num1;
    let footPrint = num2;
    let speed = num3;
  
    let distance = stepsNumber * footPrint;
    let restPeriodsSeconds = Math.floor(distance / 500) * 60;
    let speedMpS = (speed * 1000) / 3600;
    let totalTime = distance / speedMpS + restPeriodsSeconds;
  
    let hours = Math.floor(totalTime / 3600)
      .toFixed(0)
      .padStart(2, "0");
    let minutes = Math.floor(totalTime / 60)
      .toFixed(0)
      .padStart(2, "0");
    let seconds = (totalTime % 60).toFixed(0).padStart(2, "0");
  
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  