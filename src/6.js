function getRandomColor() {
  var colors = ['#FFFFFF', '#F7D68C', '#E39A84', '#CB8B81', '#C5ADB0'];
  var randomNumber = Math.floor(Math.random() * 5);
  return colors[randomNumber];
}