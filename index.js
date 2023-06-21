const buttons = document.querySelectorAll("button");
const freeSpace = document.querySelector("#freeSpace");
let arr = Array.from(buttons);

arr.map((item) => {
  item.addEventListener("click", (e) => {
    let val = e.target.textContent;

    switch (val) {
      case "C":
        return (freeSpace.textContent = freeSpace.textContent.slice(0, -1));
        break;
      case "AC":
        return (freeSpace.textContent = " ");
        break;
        case "=":
          try {
            return (freeSpace.textContent = eval(freeSpace.textContent));
          } catch (err) {
            freeSpace.textContent = err.message;
          }
        
      default:
        freeSpace.textContent += val;
    }
  });
});
