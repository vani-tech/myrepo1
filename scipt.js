function showMessage() {
  alert("🚀 Jenkins Deployment Successful!");
}

function submitForm() {
  let name = document.getElementById("name").value;

  if(name === "") {
    document.getElementById("output").innerText = "Please enter a name!";
  } else {
    document.getElementById("output").innerText =
      "Hello " + name + ", form submitted successfully!";
  }
}
