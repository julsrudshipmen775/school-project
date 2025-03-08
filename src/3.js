function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = getRandomNumber(1, 10);
  numbers.push(randomNumber);
}
console.log(numbers);
