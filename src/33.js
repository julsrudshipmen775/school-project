function addFile(file) {
  // Add file to local storage
  localStorage.setItem('file', JSON.stringify(file));
}

function getFile() {
  // Retrieve file from local storage
  const file = JSON.parse(localStorage.getItem('file'));
  
  if (file) {
    return file;
  } else {
    return null;
  }
}
