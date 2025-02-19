let currentTaskId = null;

// Показать форму подтверждения
function showConfirmationForm(taskId) {
    currentTaskId = taskId;
    document.getElementById('confirmation-form').style.display = 'block';
}

// Скрыть форму подтверждения
function hideConfirmationForm() {
    document.getElementById('confirmation-form').style.display = 'none';
}

// Принять задание
function acceptTask() {
    const task = document.getElementById(currentTaskId);
    
    task.classList.add('accepted');
    task.querySelector('.accept-button').style.display = 'none';
    task.querySelector('.complete-button').style.display = 'inline-block';
    
    hideConfirmationForm();
    showNotification(`🎉 Квест "${task.querySelector('.task-title').textContent}" принят!`);
}

// Показать форму завершения
function showCompleteForm(taskId) {
    currentTaskId = taskId;
    document.getElementById('complete-form').style.display = 'block';
}

// Скрыть форму завершения
function hideCompleteForm() {
    document.getElementById('complete-form').style.display = 'none';
}

// Отправить отчет
function submitTask() {
    const fileInput = document.getElementById('task-photo');
    
    if (!fileInput.files.length) {
        showNotification('⚠️ Сначала сделайте фото!', 'error');
        return;
    }

    const task = document.getElementById(currentTaskId);
    task.classList.remove('accepted');
    task.classList.add('completed');
    task.querySelector('.complete-button').style.display = 'none';
    
    // Здесь должна быть отправка файла на сервер
    const file = fileInput.files[0];
    console.log('Отправляем файл:', file.name);
    
    showNotification('📬 Отчет успешно отправлен! Проверяем...');
    setTimeout(() => {
        showNotification('✅ Квест завершен! Награда получена!', 'success');
        task.querySelector('.task-title').innerHTML += ' <span class="completed-badge">✔️</span>';
    }, 2000);

    hideCompleteForm();
    fileInput.value = '';
}

// Уведомления
function showNotification(text, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = text;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
