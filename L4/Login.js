import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFtnhZtvrVjTtxt_6PLAxzs4zL1ynp4S8",
  authDomain: "tidy-elf-379311.firebaseapp.com",
  projectId: "tidy-elf-379311",
  storageBucket: "tidy-elf-379311.appspot.com",
  messagingSenderId: "1044738629305",
  appId: "1:1044738629305:web:78c3ef7b15c6d486560568",
  measurementId: "G-RS0DHBX5PQ",
};


// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get the login submit button element
const loginSubmitButton = document.getElementById("logSubmit");

// Add a click event listener to the login submit button
loginSubmitButton.addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the email and password from the input fields
  var email1 = document.getElementById("logEmail").value;
  var password1 = document.getElementById("logPassword").value;

  try {
    // Sign in using email and password
    const userCredential = await signInWithEmailAndPassword(auth, email1, password1);
    const user = userCredential.user;

    // Redirect to youtube.com on successful login
    window.location.href = "http://127.0.0.1:5500/Generator%20/generator.html";
  } catch (error) {
    // Display an error message
    console.error("Login error:", error.code, error.message);

    // You can display the error message on your webpage by adding an HTML element for it, e.g., a <div>
    const errorMessageDiv = document.getElementById("errorMessage");
    errorMessageDiv.textContent = error.message; // Display the error message on the webpage
  }
});
