function lockedProfile() {
    let mainEl = document.querySelector("main");
    mainEl.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        let isLocked =
          e.target.parentNode.querySelector("input[type=radio]:checked").value ===
          "lock";
  
        if (isLocked) {
          return;
        }
  
        let divEl = e.target.parentNode.querySelector("DIV");
        let isVisable = divEl.style.display === "block";
        divEl.style.display = isVisable ? "none" : "block";
        divEl.style.display = isVisable
          ? (e.target.textContent = "Show more")
          : (e.target.textContent = "Hide it");
      }
    });
  }
  