// Create a new file named "file.js"
let file = { name: 'File Name', content: 'Some Content' };

function saveToFile() {
  let input = document.getElementById('input').value;
  if (input) {
    // Add the current file to the localStorage for sharing with classmates
    localStorage.setItem('file', JSON.stringify(file));
    alert('File saved successfully.');
  } else {
    alert('Please enter a name and content.');
  }
}

// Load the saved file from local storage
function loadFromFile() {
  if (localStorage.getItem('file')) {
    let parsed = JSON.parse(localStorage.getItem('file'));
    file = { ...parsed, name: document.getElementById('name').value };
  } else {
    alert('No file found in local storage.');
  }
}

// Function to share the file with classmates
function shareFileWithClassmates() {
  // TODO: Add code here to share the file with classmates
  console.log("File shared successfully.");
}

// Initial code to create a new file and save it locally
document.getElementById('create-file').addEventListener('click', () => {
  saveToFile();
});

document.getElementById('load-file').addEventListener('click', () => {
  loadFromFile();
});

shareFileWithClassmates();
