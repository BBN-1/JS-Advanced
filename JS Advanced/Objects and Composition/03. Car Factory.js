function carFactory(car) {
    let resultCar = {};
    let engine = {};
    let carriage = {};
    let model = car.model
  
    
  
    if (car.power <= 90) {
      (engine.power = 90), (engine.volume = 1800);
    } else if (car.power > 90 && car.power <= 120) {
      (engine.power = 120), (engine.volume = 2400);
    } else if (car.power > 120 && car.power <= 200) {
      (engine.power = 200), (engine.volume = 3500);
    }
  
    //resultCar.engine = engine;
  
    carriage.type = car.carriage;
    carriage.color = car.color;
  
    //resultCar.carriage = carriage;
  
    resultCar = { model, engine, carriage,}
    if (car.wheelsize % 2 === 0) {
      car.wheelsize--;
    }
  
    resultCar.wheels = [
      car.wheelsize,
      car.wheelsize,
      car.wheelsize,
      car.wheelsize,
    ];
  
    return resultCar;
  }
  