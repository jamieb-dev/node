function greet() {
  console.log("Hello there!");
}

function getRandomNumber() {
  return Math.round(Math.random());
}

let x = getRandomNumber();
console.log(x);

switch (true) {
  case x == 0:
    console.log("x == 0");
    break;
  case x != 0:
    console.log("x != 0");
}
