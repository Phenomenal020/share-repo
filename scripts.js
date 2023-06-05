// Get the modal element
const modal = document.getElementById("modal-container");

// close icon
const closeBtn = document.getElementsByClassName("close")[0];

// continue to aspapay button
const continueButton = document.getElementById("continueButton");

// Get references to specific DOM elements
// The container for each input
const cardRowDiv = document.getElementsByClassName("card-row");
// The expiry field container
const expiryDiv = document.getElementsByClassName("expiry-input")[0];
// The input field itself
const cardInputDiv = document.getElementsByClassName("card-input")[0];
// Get the expiry date input
const expiryDateInput = document.getElementById("expiryDate"); 
// Get the cvv input
const cvvInput = document.getElementById("cvv"); 
// card number
const cardInput = document.getElementById("card-input");
 // name on card 
const nameOnCard = document.getElementById("nameOnCard");

let trackedInput = null;
let trackedCardNumber = null;

// Show the modal on page load
continueButton.addEventListener("click", () => {
  modal.classList.add("slide-down");
});

// Close the modal and go back when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.classList.remove("slide-down");
  window.history.back();
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("slide-down");
  }
});

// Format the card number input by adding a space after every 4 digits
cardInput.addEventListener("input", (event) => {
  const input = event.target;
  const inputValue = input.value.replace(/\s/g, "");
  const formattedValue = inputValue.replace(/(\d{4})/g, "$1 ").trim();
  input.value = formattedValue;
});

// Process the card input by adding spaces after every 4 digits (Unused function)
function processCardInput(input) {
  let spaceCount = parseInt(input.length / 4);
  let processedInput = input;
  let start = 0;
  for (let i = 1; i < spaceCount; i++) {
    processedInput =
      processCardInput.slice(start, i * 4) +
      " " +
      processCardInput.slice(i * 4);
    start += 4;
  }
}

// Handle the expiry date input
expiryDateInput.addEventListener("input", (event) => {
  const input = event.target.value;
  const sanitizedInput = input.replace(/\D/g, "");
  if (sanitizedInput.length < 2) {
    trackedInput = sanitizedInput;
    expiryDateInput.value = trackedInput;
  } else if (sanitizedInput.length === 2) {
    trackedInput = sanitizedInput.slice(0, 2) + "/";
    expiryDateInput.value = trackedInput;
  } else if (sanitizedInput.length === 4 || sanitizedInput.length > 4) {
    trackedInput =
      sanitizedInput.slice(0, 2) + "/" + sanitizedInput.slice(2, 4);
    expiryDateInput.value = trackedInput;
  }
});

// Handle the cvv input
cvvInput.addEventListener("input", (event) => {
  const cvv = event.target.value;
  const sanitizedInput = cvv.replace(/\D/g, "");
  cvvInput.value = sanitizedInput;
  if (sanitizedInput.length >= 3) {
    cvvInput.value = sanitizedInput.slice(0, 3);
  }
});

// Focus and blur functions
function addFocusBorder(parentElement) {
  parentElement.classList.add("focused");
}

function removeFocusBorder(parentElement) {
  parentElement.classList.remove("focused");
}
