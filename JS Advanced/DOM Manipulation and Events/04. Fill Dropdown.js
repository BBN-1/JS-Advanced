function addItem() {
    
    let selectEl = document.querySelector('#menu')
    let textEl = document.querySelector('#newItemText')
    let valueEl = document.querySelector('#newItemValue')

    let newOption = document.createElement('option')
    let optionText = document.createTextNode(textEl.value)
    newOption.appendChild(optionText)
    newOption.setAttribute('value',valueEl.value)
    console.log(newOption.value);

    selectEl.appendChild(newOption)
    textEl.value = "" 
    valueEl.value = ""

}