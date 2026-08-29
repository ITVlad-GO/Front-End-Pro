const form = document.querySelector(".contact-form");

const nameInput = document.querySelector(".name-input");
const messageInput = document.querySelector(".message-input");
const phoneInput = document.querySelector(".phone-input");
const emailInput = document.querySelector(".email-input");

const nameError = document.querySelector(".name-error");
const messageError = document.querySelector(".message-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  nameError.textContent = "";
  messageError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ\s]+$/;
  const phoneRegex = /^\+380\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else if (!nameRegex.test(nameInput.value.trim())) {
    nameError.textContent = "Name can contain only letters";
    isValid = false;
  }

  if (messageInput.value.trim().length < 5) {
    messageError.textContent = "Message must contain at least 5 characters";
    isValid = false;
  }

  if (phoneInput.value.trim() === "") {
    phoneError.textContent = "Phone number is required";
    isValid = false;
  } else if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.textContent = "Phone must start with +380 and contain 9 digits";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: nameInput.value.trim(),
      message: messageInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
    });

    form.reset();
  }
});
