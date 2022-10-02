function create(words) {

    let contentIdEl = document.getElementById('content')
    let divArr = []
 
    for (let word of words) {
 
       let newDiv = document.createElement('div')
 
       let newParagraph = document.createElement('p')
       newParagraph.textContent = word
       newParagraph.style.display = "none"
       newDiv.appendChild(newParagraph)
       contentIdEl.appendChild(newDiv)
       divArr.push(newDiv)
 
    }
 
    contentIdEl.addEventListener('click', (e) => {
       if (e.target.tagName == "DIV" || e.target.tagName == "P") {
          e.target.children[0].style = "block"
       }
    })
 
 
 
 
 
 }