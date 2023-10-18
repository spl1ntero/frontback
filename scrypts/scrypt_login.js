document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    // автоматическая вставка текущего года
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  
    // Имитация базы данных
    const bdData = {
      "email@mail.ru": "password"
    };
  
    if (registrationForm) {
      registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // TODO: когда бд будет сделана сделай проверку на соответствие email и password с введенными 
        // и после этого пропусти пользователя
        // пока что здесь будет заглушка, которая не будет пропускать пользователя дальше 
  
        // Получите введенные пользователем email и пароль
        const email = emailInput.value;
        const password = passwordInput.value;
  
        // Проверьте, есть ли соответствие введенных данных данным в имитированной базе данных
        if (bdData.hasOwnProperty(email) && bdData[email] === password) {
          // Если есть соответствие, перенаправьте пользователя на нужную страницу
          window.location.href = "../templates/metrics.html";
        } else {
          // Если нет соответствия, можно показать сообщение об ошибке или оставить пользователя на текущей странице
          alert("Неправильный email или пароль. Пожалуйста, попробуйте еще раз.");
        }
      });
    }
});
  
  