const fs = require('fs');

// Read file content
const filePath = 'path/to/your/file.txt';
const data = fs.readFileSync(filePath, { encoding: 'utf8' });

console.log(data);
