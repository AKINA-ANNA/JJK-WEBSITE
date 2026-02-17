// sign.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// Replace with your Supabase project details
const SUPABASE_URL = "https://gsdjynomhzcbwwvvnyga.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ROuasYI11Kc8byAXxBKaLA_0RuXnUdN";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Toggle between login and signup sections
const loginSection = document.getElementById("login-section");
const signupSection = document.getElementById("signup-section");
const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");
const output = document.getElementById("output");

showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginSection.classList.add("hidden");
  signupSection.classList.remove("hidden");
  output.innerText = "";
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
  output.innerText = "";
});

// Handle login form
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    output.innerText = "Login failed";
  } else {
    output.innerText = "Login successful";
    // Redirect to community.html after successful login
    window.location.href = "community/community.html";
  }
});

// Handle signup form
document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const username = document.getElementById("signup-username").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username }, // store username in user metadata
    },
  });

  if (error) {
    output.innerText = "Signup failed";
  } else {
    output.innerText = "Signup successful";
  }
});

// Optional: Forgot password handler
document.getElementById("forgot-password").addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  if (!email) {
    output.innerText = "Enter email first";
    return;
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + "/reset",
  });

  if (error) {
    output.innerText = "Reset failed";
  } else {
    output.innerText = "Reset email sent";
  }
});