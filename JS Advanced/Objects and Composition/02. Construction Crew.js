function constructionCrew(worker) {
    if (worker.dizziness) {
      let requiredAmount = 0.1 * worker.weight * worker.experience;
      worker.levelOfHydrated += requiredAmount;
      worker.dizziness = false;
    }
  
    return worker;
  }