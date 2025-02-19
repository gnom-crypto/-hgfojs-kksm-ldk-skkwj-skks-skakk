// Функция для показа формы подтверждения
function showConfirmationForm(taskId) {
    const form = document.getElementById('confirmation-form');
    form.style.display = 'block';
    form.dataset.taskId = taskId;
}

// Функция для скрытия формы подтверждения
function hideConfirmationForm() {
    const form = document.getElementById('confirmation-form');
    form.style.display = 'none';
}

// Функция для принятия задания
function acceptTask() {
    const form = document.getElementById('confirmation-form');
    const taskId = form.dataset.taskId;
    const task = document.getElementById(taskId);

    // Помечаем задание как принятое
    task.classList.add('accepted');
    task.querySelector('.accept-button').disabled = true;
    task.querySelector('.accept-button').textContent = 'Принято';

    // Показываем кнопку "Задание выполнено"
    const completeButton = task.querySelector('.complete-button');
    completeButton.style.display = 'block';

    // Блокируем кнопку на 5 минут
    completeButton.disabled = true;
    setTimeout(() => {
        completeButton.disabled = false;
    }, 5 * 60 * 1000); // 5 минут

    // Скрываем форму
    hideConfirmationForm();
}

// Функция для показа формы завершения задания
function showCompleteForm(taskId) {
    const form = document.getElementById('complete-form');
    form.style.display = 'block';
    form.dataset.taskId = taskId;
}

// Функция для скрытия формы завершения задания
function hideCompleteForm() {
    const form = document.getElementById('complete-form');
    form.style.display = 'none';
}

// Функция для отправки задания
function submitTask(taskId) {
    const task = document.getElementById(taskId);
    const photoInput = document.getElementById('task-photo');

    if (photoInput.files.length === 0) {
        alert('Пожалуйста, прикрепите фото.');
        return;
    }

    // Помечаем задание как выполненное
    task.classList.remove('accepted');
    task.classList.add('completed');
    task.querySelector('.complete-button').style.display = 'none';

    // Уведомление (в консоль)
    console.log(`Задание ${taskId} выполнено. Фото отправлено.`);

    // Скрываем форму
    hideCompleteForm();
}
