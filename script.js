
const form = document.getElementById("quote-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  message.textContent =
    "Demo successful! Your form is working.";
  message.style.color = "#246b4c";

  form.reset();
});
