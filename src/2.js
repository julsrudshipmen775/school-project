
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(getRandomInt(10));
}
console.log(arr);