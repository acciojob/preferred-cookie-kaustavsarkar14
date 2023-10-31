//your JS code here. If required.
// Get references to HTML elements
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const form = document.querySelector("form");

// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to read a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

// Apply user preferences from cookies when the page loads
window.addEventListener("load", () => {
  const fontSizeFromCookie = getCookie("fontSize");
  const fontColorFromCookie = getCookie("fontColor");

  if (fontSizeFromCookie) {
    document.body.style.fontSize = fontSizeFromCookie;
    fontSizeInput.value = fontSizeFromCookie;
  }

  if (fontColorFromCookie) {
    document.body.style.color = fontColorFromCookie;
    fontColorInput.value = fontColorFromCookie;
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const fontSizeValue = fontSizeInput.value + "px";
  const fontColorValue = fontColorInput.value;

  // Apply the user's preferences to the page 
  document.body.style.fontSize = fontSizeValue;
  document.body.style.color = fontColorValue;

  // Store user preferences as cookies 
  setCookie("fontSize", fontSizeValue, 365); // Cookie expires in 365 days
  setCookie("fontColor", fontColorValue, 365); // Cookie expires in 365 days
});
