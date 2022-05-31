const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  //   const currentColor = h1.style.color;
  //   let newColor;
  //   if (h1.style.color === "blue") {
  //     newColor = "tomato";
  //   } else {
  //     newColor = "blue";
  //   }
  //   h1.style.color = newColor;
  const clickedClass = "clicked sexy-font";
  if (h1.className === clickedClass) {
    console.log(1);
    h1.className = "";
  } else {
    console.log(2);
    h1.className = clickedClass;
  }
  //h1.className = "active";
}

h1.addEventListener("click", handleTitleClick);
