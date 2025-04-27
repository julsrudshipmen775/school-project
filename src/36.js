// Example JavaScript code for file manipulation or basic operations

function appendTextToFile(filePath, textToAppend) {
  // Append text to the file at the specified path
  const fs = require('fs');
  fs.appendFile(filePath, textToAppend, (err) => {
    if (err) throw err;
    console.log(`Updated ${filePath} with new content.`);
  });
}

function readTextFromFile(filePath) {
  // Read and return the content of a file at the specified path
  const fs = require('fs');
  return fs.readFileSync(filePath, 'utf-8');
}

// Example usage:
appendTextToFile('/path/to/your/file.txt', 'Hello, World!');
console.log(readTextFromFile('/path/to/your/file.txt'));
