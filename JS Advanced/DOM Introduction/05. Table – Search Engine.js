function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    let inputEl = document.getElementById('searchField')
    let rowsEl = document.querySelectorAll('tbody tr')
 
    function onClick() {
     
       for (let row of rowsEl) {
          row.classList.remove('select')
          if(inputEl.value !== '' && row.textContent.includes(inputEl.value)){
             row.className = 'select'
          }
       };
       inputEl.value = ''
 }
 }