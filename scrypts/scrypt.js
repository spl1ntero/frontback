document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const usernameError = document.getElementById("username-error");
  // автоматическая вставка текущего года
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  if (usernameError) {
    registrationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // TODO: добавить проверку существует ли такой email в бд и если существует оповести человека про это
      const username = usernameInput.value;
      const password = passwordInput.value;
      const email = emailInput.value;
      // Проверка паттерн для проверки на логин, начинающийся с латинской буквы и содержащий латинские буквы и цифры
      const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]*$/;
      if (!usernamePattern.test(username)) {
        usernameError.textContent = "Логин должен начинаться с латинской буквы";
      } else {
        usernameError.textContent = "";

        const userData = {
          username: username,
          password: password,
          email: email,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "templates/success.html";
      }
    });
  }
});
