// script.js

// ============================
// SECTION 1: Custom Form Validation
// ============================
// This part listens for the form submission, checks if the inputs
// are valid according to custom rules (not just HTML5 defaults),
// and displays error messages if necessary.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default form submission
    let errors = [];

    // Validate name (must not be empty, at least 3 characters long)
    if (nameInput.value.trim().length < 3) {
      errors.push("Name must be at least 3 characters long.");
    }

    // Validate email with a regex pattern (basic check for email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      errors.push("Please enter a valid email address.");
    }

    // Validate message (at least 5 characters long)
    if (messageInput.value.trim().length < 5) {
      errors.push("Message must be at least 5 characters long.");
    }

    // Create or update error display box
    let errorBox = document.getElementById("form-errors");
    if (!errorBox) {
      errorBox = document.createElement("div");
      errorBox.id = "form-errors";
      errorBox.style.color = "red";
      errorBox.style.marginTop = "10px";
      form.appendChild(errorBox);
    }

    // Show error messages if validation fails
    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
    } else {
      // Clear errors and show success message
      errorBox.innerHTML = "";
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});

// ============================
// SECTION 2: Interactive Counter
// ============================
// This part controls the + / - counter on the page.
// It updates the displayed number when buttons are clicked.
let count = 0;
const countDisplay = document.getElementById("count");
const incrementBtn = document.querySelector(".counter button:last-child");
const decrementBtn = document.querySelector(".counter button:first-child");

// Increase count on "+" button click
incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Decrease count on "-" button click (but not below 0)
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

// ============================
// SECTION 3: Dark Mode Toggle
// ============================
// This creates a button that toggles between light mode and dark mode.
// It changes background colors and text colors when activated.
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
darkModeBtn.style.marginTop = "15px";
darkModeBtn.style.padding = "10px";
darkModeBtn.style.cursor = "pointer";

// Add the button to the footer of the page
document.querySelector("footer").appendChild(darkModeBtn);

// When button is clicked, toggle dark mode class on body
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Add CSS rules for dark mode dynamically (instead of editing the CSS file)
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #222;
    color: #f4f4f9;
  }
  .dark-mode header, .dark-mode nav, .dark-mode footer {
    background-color: #111 !important;
  }
  .dark-mode a {
    color: #4CAF50;
  }
  .dark-mode section {
    background-color: #333;
    color: #eee;
  }
`;
document.head.appendChild(style);

