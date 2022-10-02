function storeCatalogue(arr) {

    
    let array = arr
    let storeList = {}

    for (let line of array) {
        let [name,price] = line.split(" : ")
        price = Number(price)
        
        if(!storeList[name]){
            storeList[name] = price
        }
    }

    let sortedList = Object.entries(storeList).sort((a,b) => {
        let productNameA = a[0]
        let productNameB = b[0]
        
        return productNameA.localeCompare(productNameB)
    })

    let char = ''

    for (let i = 0; i < sortedList.length; i++) {

        if(sortedList[i][0][0] !== char){
            console.log(sortedList[i][0][0])
        }
    let name  = sortedList[i][0]
    let price = sortedList[i][1]
       console.log(`  ${name}: ${price}`);
       char = sortedList[i][0][0]
    }

}