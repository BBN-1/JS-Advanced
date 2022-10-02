function tickets(arr, str) {
    let ticketsArr = [];
  
    class Ticket {
      constructor(destination, price, status) {
        (this.destination = destination),
          (this.price = Number(price)),
          (this.status = status);
      }
    }
  
    for (let line of arr) {
      let [destination, price, status] = line.split("|");
      let ticket = new Ticket(destination, price, status);
      ticketsArr.push(ticket);
    }
  
    
  
    sortedArr = ticketsArr.sort((a,b)=> {
  
      if(str === "destination"){
          let destinationA = a.destination
          let destinationB = b.destination
  
          return destinationA.localeCompare(destinationB)
      }else if ( str === "price"){
          return a.price - b.price
      }else if ( str === "status"){
          let statusA = a.status
          let statusB = b.status
  
          return statusA.localeCompare(statusB)
      }
    })
  
    return sortedArr;
  }