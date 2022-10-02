function solve() {
    let inputEl = document.getElementById("input");
    let outputEl = document.getElementById("output");
  
    let textArr = inputEl.value.split(".").filter((x) => x !== "");
  
    while (textArr.length > 0) {
      let text = textArr.splice(0, 3).join(". ") + ".";
      let p = document.createElement("p");
      p.textContent = text;
      outputEl.appendChild(p);
    }
  
    
  }
  