function roadRadar(speed, area) {
    let givenSpeed = speed;
    let givenArea = area;
  
    if (givenArea === "motorway") {
      if (givenSpeed <= 130) {
        console.log(`Driving ${givenSpeed} km/h in a 130 zone`);
      } else if (givenSpeed >= 131 && givenSpeed <= 150) {
        console.log(
          `The speed is ${
            givenSpeed - 130
          } km/h faster than the allowed speed of 130 - speeding`
        );
      } else if (givenSpeed >= 151 && givenSpeed <= 170) {
        console.log(
          `The speed is ${
            givenSpeed - 130
          } km/h faster than the allowed speed of 130 - excessive speeding`
        );
      } else if (givenSpeed > 170) {
        console.log(
          `The speed is ${
            givenSpeed - 130
          } km/h faster than the allowed speed of 130 - reckless driving`
        );
      }
    } else if (givenArea === "interstate") {
      if (givenSpeed <= 90) {
        console.log(`Driving ${givenSpeed} km/h in a ${givenArea} zone`);
      } else if (givenSpeed >= 91 && givenSpeed <= 110) {
        console.log(
          `The speed is ${
            givenSpeed - 90
          } km/h faster than the allowed speed of 90 - speeding`
        );
      } else if (givenSpeed >= 111 && givenSpeed <= 130) {
        console.log(
          `The speed is ${
            givenSpeed - 90
          } km/h faster than the allowed speed of 90 - excessive speeding`
        );
      } else if (givenSpeed > 130) {
        console.log(
          `The speed is ${
            givenSpeed - 90
          } km/h faster than the allowed speed of 90 - reckless driving`
        );
      }
    } else if (givenArea === "city") {
      if (givenSpeed <= 50) {
        console.log(`Driving ${givenSpeed} km/h in a 50 zone`);
      } else if (givenSpeed >= 51 && givenSpeed <= 70) {
        console.log(
          `The speed is ${
            givenSpeed - 50
          } km/h faster than the allowed speed of 50 - speeding`
        );
      } else if (givenSpeed >= 71 && givenSpeed <= 90) {
        console.log(
          `The speed is ${
            givenSpeed - 50
          } km/h faster than the allowed speed of 50 - excessive speeding`
        );
      } else if (givenSpeed > 90) {
        console.log(
          `The speed is ${
            givenSpeed - 50
          } km/h faster than the allowed speed of 50 - reckless driving`
        );
      }
    } else if (givenArea === "residential") {
      if (givenSpeed <= 20) {
        console.log(`Driving ${givenSpeed} km/h in a 20 zone`);
      } else if (givenSpeed >= 21 && givenSpeed <= 40) {
        console.log(
          `The speed is ${
            givenSpeed - 20
          } km/h faster than the allowed speed of 20 - speeding`
        );
      } else if (givenSpeed >= 41 && givenSpeed <= 60) {
        console.log(
          `The speed is ${
            givenSpeed - 20
          } km/h faster than the allowed speed of 20 - excessive speeding`
        );
      } else if (givenSpeed > 60) {
        console.log(
          `The speed is ${
            givenSpeed - 20
          } km/h faster than the allowed speed of 20 - reckless driving`
        );
      }
    }
  }