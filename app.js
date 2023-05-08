function greet() {
    const name = document.getElementById("name").value;
    const greeting = document.getElementById("greeting");
    greeting.textContent = `Hello, ${name}! Welcome to our site.`;
  }