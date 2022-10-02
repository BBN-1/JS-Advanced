function solve() {
    let mage = function (name) {
      let obj = {
        name,
        health: 100,
        mana: 100,
        cast: (spell) => {
          console.log(`${name} cast ${spell}`)
          return obj.mana--
        }
      }
      return obj
    }
  
    let fighter = function(name){
      let obj = {
        name,
        health: 100,
        stamina:100,
        fight: () => {
          console.log(`${name} slashes at the foe!`)
         return obj.stamina--
        }
      }
    return obj
    }
  
    return ({
      mage: mage,
      fighter: fighter
    })
  }