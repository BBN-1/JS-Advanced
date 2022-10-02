function toggle() {

    let divEl = document.getElementsByClassName('button')[0]
    let extraEl = document.getElementById('extra')


    
    if(divEl.textContent === 'More'){
        extraEl.style.display = 'block'
        divEl.textContent = 'Less'
    }else if(divEl.textContent === 'Less'){
        extraEl.style.display = 'none'
        divEl.textContent = 'More'
    }
    
}