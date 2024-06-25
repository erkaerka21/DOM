// console.log("working");
// const textElements = document.getElementById("text");

// const myElement = document.createElement("h1");
// myElement.textContent = "Pinecone LLC";
// document.getElementById("test").appendChild(myElement);
// console.log(myElement);

// const elements = document.getElementsByClassName("demo");
// console.log(elements[0].children);

// function handleClick() {
//   console.log("Button clicked");
//   textElements.style.color = "red";
//   textElements.style.fontSize = "60px";
//   textElements.style.backgroundColor = "yellow";
//   textElements.textContent = "Pinecone";
//   textElements.innerText = "Pinecone LLC";
//   textElements.innerHTML = "<h1>Pinecone LLC mongolia<h1/>";
// }

// const btnEl = document.getElementById("btn");
// console.log(btnEl);
// // btnEl.addEventListener("click");

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function filter(numbers, callback) {
//   let results = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (callback(numbers[i])) {
//       results.push(numbers[i]);
//     }
//   }
//   return results;
// }
// const evens = filter(numbers, (n) => {
//   return n % 2 === 0;
// });
// console.log(evens);
// const odds = filter(numbers, (n) => {
//   return n % 2 !== 0;
// });
// console.log(odds);
// const odds3 = filter(numbers, (n) => {
//   return n % 3 === 0;
// });
// console.log(odds3);

// const boxChange = document.getElementsByClassName("box");

// function handleClick() {
//   boxChange.style.height = "80vh";
//   boxChange.style.width = "100vw";
//   boxChange.style.backgroundColor = "red";
// }

const boxChange = document.getElementsByClassName("box");
const buttonCh = document.getElementById("bttn");
function generateColor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  return `rgb(${rColor},${gColor},${bColor})`;
}
function changeColor() {
  for (let i = 0; i < boxChange.length; i++) {
    boxChange[i].style.backgroundColor = generateColor();
  }
}
buttonCh.addEventListener("click", changeColor);

// const newButton = document.createElement("button");
// const newText = document.createTextNode("Хайрцаг нэмэх");
// newButton.appendChild(newText);

// const main = document.getElementsByTagName("body");
// main.appendChild(newButton);
const plusBttn = document.getElementById("bttnplus");
function addDiv() {
  const newDiv = document.createElement("div");
  newDiv.className = "box";
  const parent = document.getElementsByClassName("container")[0];
  parent.appendChild(newDiv);
}
plusBttn.addEventListener("click", addDiv);
