// This function takes an array of strings as input and returns a randomly generated string from that array.
function getRandomString(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Example usage:
const randomString = getRandomString(['hello', 'world', 'foo', 'bar']);
console.log(randomString); // Outputs "hello", "world", "foo", or "bar" randomly.
