function showConfirmationForm(taskId) {
    const form = document.getElementById('confirmation-form');
    form.style.display = 'block';
    form.dataset.taskId = taskId; // Сохраняем ID задачи для дальнейшего использования
}

function hideConfirmationForm() {
    const form = document.getElementById('confirmation-form');
    form.style.display = 'none';
}

function acceptTask() {
    const form = document.getElementById('confirmation-form');
    const taskId = form.dataset.taskId;
    const task = document.getElementById(taskId);

    // Помечаем задание как принятое
    task.classList.add('accepted');
    task.querySelector('.accept-button').disabled = true;
    task.querySelector('.accept-button').textContent = 'Принято';

    // Скрываем форму
    hideConfirmationForm();

    // Отправляем данные (заглушка)
    sendDataToServer(taskId);
}

function completeTask(taskId) {
    const task = document.getElementById(taskId);
    task.classList.remove('accepted');
    task.classList.add('completed');
    task.querySelector('.accept-button').textContent = 'Выполнено';
}

function sendDataToServer(taskId) {
    // Заглушка для отправки данных на сервер
    console.log(`Задание ${taskId} принято. Данные отправлены.`);
    // Здесь можно добавить fetch или axios для отправки данных
}
