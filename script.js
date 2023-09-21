// Find the element with the id "level"
const element = document.getElementById("level");

// Initialize a variable to count the DOM level
let domLevel = 0;

// Traverse the DOM tree upwards from the target element
let currentElement = element;
while (currentElement && currentElement !== document.documentElement) {
  currentElement = currentElement.parentElement;
  domLevel++;
}

// Display the DOM level using the alert function
alert(`The level of the element is: ${domLevel}`);
