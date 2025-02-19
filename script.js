// Функция для сохранения состояния задания
function saveTaskState(taskId, status) {
    localStorage.setItem(taskId, status);
}

// Функция для загрузки состояния задания
function loadTaskState(taskId) {
    return localStorage.getItem(taskId);
}

// Функция для отображения формы подтверждения
function showConfirmationForm(taskId) {
    const form = document.getElementById('confirmation-form');
    form.style.display = 'block';
    form.dataset.taskId = taskId; // Сохраняем ID задачи для дальнейшего использования
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

    // Сохраняем состояние задания
    saveTaskState(taskId, 'accepted');

    // Скрываем форму
    hideConfirmationForm();

    // Отправляем данные (заглушка)
    sendDataToServer(taskId);
}

// Функция для завершения задания
function completeTask(taskId) {
    const task = document.getElementById(taskId);
    task.classList.remove('accepted');
    task.classList.add('completed');
    task.querySelector('.accept-button').textContent = 'Выполнено';

    // Сохраняем состояние задания
    saveTaskState(taskId, 'completed');
}

// Функция для отправки данных на сервер (заглушка)
function sendDataToServer(taskId) {
    console.log(`Задание ${taskId} принято. Данные отправлены.`);
}

// При загрузке страницы восстанавливаем состояние задания
window.onload = function () {
    const taskId = 'task-1';
    const taskState = loadTaskState(taskId);

    if (taskState === 'accepted') {
        const task = document.getElementById(taskId);
        task.classList.add('accepted');
        task.querySelector('.accept-button').disabled = true;
        task.querySelector('.accept-button').textContent = 'Принято';
    } else if (taskState === 'completed') {
        const task = document.getElementById(taskId);
        task.classList.add('completed');
        task.querySelector('.accept-button').textContent = 'Выполнено';
    }
};
