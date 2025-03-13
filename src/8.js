const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomColor = () => {
  const colors = ['red', 'green', 'blue'];
  return colors[getRandomInt(colors.length)];
}

console.log(getRandomColor());
