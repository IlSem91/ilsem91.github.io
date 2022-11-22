const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Javascriptlogo.png") {
    myImage.setAttribute("src", "images/htmllogo.png");
  } else {
    myImage.setAttribute("src", "images/Javascriptlogo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `This Blog belongs to, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This Blog Belonds to, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };