function search() {
    // TODO
  
    let inputEl = document.getElementById("searchText").value;
    let townsEl = Array.from(document.querySelectorAll("#towns li"));
    let resultEl = document.getElementById("result");
    let count = 0;
  
    for (let town of townsEl) {
      if (inputEl === "") {
        town.style.textDecoration = "none";
        town.style.fontWeight = "normal";
        inputEl = "";
      } else {
        if (town.textContent.includes(inputEl)) {
          town.style.textDecoration = "underline";
          town.style.fontWeight = "bold";
          count++;
        } else {
          town.style.textDecoration = "none";
          town.style.fontWeight = "normal";
        }
      }
    }
  
    resultEl.textContent = `${count} matches found`;
  }