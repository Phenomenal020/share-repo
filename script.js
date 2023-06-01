// Get the modal element
const modal = document.getElementById("modal");

// Get the button that opens the modal
const continueButton = document.getElementById("continueButton");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// Get the button for "Pay with Card"
const payWithCardBtn = document.getElementById("payWithCardBtn");

// Get the button for "Pay with USSD"
const payWithUssdBtn = document.getElementById("payWithUssd");

// Get the card payment form
const cardForm = document.getElementById("cardForm");

// Get the expiry date input
const expiryDateInput = document.getElementById("expiryDate");

// Get the cvv input
const cvvInput = document.getElementById("cvv");

// Function to open the modal
continueButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Function to close the modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  payWithCardBtn.classList.remove("hidden");
  payWithUssdBtn.classList.remove("hidden");
  cardForm.classList.add("hidden");
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    payWithCardBtn.classList.remove("hidden");
    payWithUssdBtn.classList.remove("hidden");
    cardForm.classList.add("hidden");
  }
});

// Function to show the card payment form when "Pay with Card" is clicked
payWithCardBtn.addEventListener("click", () => {
  payWithCardBtn.classList.add("hidden");
  cardForm.classList.add("active"); // Add the "active" class to the card form
  cardForm.classList.remove("hidden");
  payWithUssdBtn.classList.add("hidden"); // Hide the "Pay with USSD" button
});

// Function to submit the form when "Continue" is clicked
const continuePaymentBtn = document.getElementById("continuePaymentBtn");
continuePaymentBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Handle form submission here
});

// expiry date input

expiryDateInput.addEventListener("input", (event) => {
  const input = event.target.value;
  const sanitizedInput = input.replace(/[^\d/]/g, ""); // Remove any non-digit and non-slash characters
  if (sanitizedInput.length >= 2 && sanitizedInput.length < 4) {
    const formattedInput = formatExpiryDate(sanitizedInput);
    expiryDateInput.value = formattedInput;
  }
  if (sanitizedInput.length > 4) {
    // Limit input to 4 characters
    const truncatedInput =
      sanitizedInput.slice(0, 2) + "-" + sanitizedInput.slice(2, 4);
    expiryDateInput.value = truncatedInput;
  }
});

function formatExpiryDate(input) {
  const formattedInput = input.slice(0, 2) + "-" + input.slice(2);
  return formattedInput;
}

// handle cvv input
cvvInput.addEventListener("input", (event) => {
    const cvv = event.target.value;
    const sanitizedInput = cvv.replace(/[^\d/]/g, ""); // Remove any non-digit and non-slash characters
    if(sanitizedInput.length >= 3) {
        cvvInput.value = sanitizedInput.slice(0, 3);
    }
})
