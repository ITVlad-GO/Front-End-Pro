const form = document.querySelector(".contact-form");
const inputs = document.querySelectorAll("input, textarea");
const errors = document.querySelectorAll(".contact-form__error");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    errors.forEach(error => error.textContent = "");

    const name = inputs[0].value.trim();
    const message = inputs[1].value.trim();
    const phone = inputs[2].value.trim();
    const email = inputs[3].value.trim();

    if (!name) {
        errors[0].textContent = "Ім'я є обов'язковим";
        return;
    }

    if (!message || message.length < 5) {
        errors[1].textContent = "Повідомлення має містити щонайменше 5 символів";
        return;
    }

    if (!/^\+380\d{9}$/.test(phone)) {
        errors[2].textContent = "Номер телефону має починатися з +380";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors[3].textContent = "Введіть коректну електронну адресу";
        return;
    }

    console.log({
        name,
        message,
        phone,
        email
    });
});