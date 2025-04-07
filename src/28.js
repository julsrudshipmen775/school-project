function addFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  fetch("/upload", { method: "POST", body: formData });
}

document.getElementById("btnUpload").addEventListener("click", addFile);
