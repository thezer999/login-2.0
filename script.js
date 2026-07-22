document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('userPassword');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const eyeIcon = document.getElementById('eyeIcon');
  const registerForm = document.getElementById('registerForm');
  const toastNotification = document.getElementById('toastNotification');

  // 1. Переключение видимости пароля
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    
    // Меняем тип поля
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

    // Переключаем иконку
    if (isPassword) {
      eyeIcon.innerHTML = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `;
    } else {
      eyeIcon.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `;
    }
  });

  // 2. Обработка отправки формы
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const password = passwordInput.value;
    const agree = document.getElementById('agreeTerms').checked;

    // Валидация
    if (!name || !email || !phone || !password) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }

    if (!agree) {
      alert('Необходимо согласиться с правилами магазина!');
      return;
    }

    // Показ всплывающего уведомления
    toastNotification.classList.add('show');

    // Сброс формы
    registerForm.reset();

    // Возвращаем иконку пароля в исходный вид
    passwordInput.setAttribute('type', 'password');
    eyeIcon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    `;

    // Скрываем уведомление через 4 секунды
    setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4000);
  });
});