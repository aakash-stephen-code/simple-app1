function greet() {
  const name = document.getElementById("name").value;
  const greeting = document.getElementById("greeting");

  // check if name is not empty
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  // check if name contains only letters
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(name)) {
    alert("Please enter a valid name with only letters.");
    return;
  }

  // get current date and time
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  // construct the greeting message
  let message = `Hello, ${name}! Welcome to our site. `;
  message += `Today is ${date} and the time is ${time}.`;
  greeting.textContent = message;
}