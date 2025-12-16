document.addEventListener('DOMContentLoaded', function() {
    const serviceBtn = document.getElementById('service-btn');
    const errorModal = document.getElementById('error-modal');
    const closeModal = document.getElementById('close-modal');
    const contentWrapper = document.getElementById('content-wrapper');
    const body = document.body;

            // Функция для открытия модального окна
    function openModal() {
        errorModal.style.display = 'flex';
        body.classList.add('blur-background');
    }

            // Функция для закрытия модального окна
    function closeModalHandler() {
        errorModal.style.display = 'none';
        body.classList.remove('blur-background');
    }

            // Обработчик клика по кнопке "Сервис"
    serviceBtn.addEventListener('click', openModal);

            // Обработчик клика по кнопке закрытия
    closeModal.addEventListener('click', closeModalHandler);

            // Закрытие модального окна при клике вне его области
    errorModal.addEventListener('click', function(event) {
        if (event.target === errorModal) {
            closeModalHandler();
        }
    });

            // Закрытие модального окна при нажатии клавиши Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModalHandler();
        }
    });
});