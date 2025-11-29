// Добавляем в существующий script.js

// Анимация элементов при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем анимацию для шутливых элементов
    const humorElements = document.querySelectorAll('.ticket-subtitle, .character-stats, .quote');
    humorElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Запускаем анимацию с задержкой
    setTimeout(() => {
        humorElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, index * 200);
        });
    }, 1000);

    // Случайные анимации для конусов
    const cones = document.querySelectorAll('.cone');
    cones.forEach(cone => {
        cone.addEventListener('mouseenter', function() {
            this.style.animation = 'bounceCone 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'bounceCone 8s ease-in-out infinite';
            }, 500);
        });
    });

    // Анимация для протоколов при наведении
    const protocols = document.querySelectorAll('.protocol-card');
    protocols.forEach(protocol => {
        protocol.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(1deg)';
        });
        
        protocol.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Шутливое сообщение в консоли
    console.log(`%c
    🚗 Добро пожаловать в Порулику! 🚗
    
    Важные инструкции:
    1. Не забывайте дышать
    2. Педаль сцепления - ваша лучшая подруга
    3. Василий Петрович всегда прав (даже когда не прав)
    4. Конусы - не враги, они просто проверяют ваши навыки
    
    Удачи на экзамене! 🎯
    `, 'color: #1E3A8A; font-size: 14px; font-weight: bold;');
});

// Дополняем обработку формы
document.getElementById('examForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Шутливое состояние отправки
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправляем Василию Петровичу на одобрение...';
    submitBtn.disabled = true;
    
    // Случайная шутливая фраза
    const funnyPhrases = [
        "Проверяем, не занят ли автодром...",
        "Уточняем расписание ГАИшника Лёни...", 
        "Заказываем шаурму для инструктора...",
        "Накачиваем шины у ВАЗика...",
        "Предупреждаем конусы о вашем визите..."
    ];
    
    let currentPhrase = 0;
    const phraseInterval = setInterval(() => {
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${funnyPhrases[currentPhrase]}`;
        currentPhrase = (currentPhrase + 1) % funnyPhrases.length;
    }, 1000);
    
    // Имитация отправки
    setTimeout(() => {
        clearInterval(phraseInterval);
        
        // Случайный результат
        const results = [
            "Василий Петрович одобрил! Ждем вас на экзамен!",
            "ГАИшник Лёня проверил - все чисто! Записали!",
            "ВАЗ-2107 завелся от радости! Вы записаны!",
            "Конусы в ожидании! Запись подтверждена!"
        ];
        const randomResult = results[Math.floor(Math.random() * results.length)];
        
        alert(`🎉 ${randomResult}\n\nМы свяжемся с вами для подтверждения времени. И да, готовьте нервы!`);
        
        // Восстанавливаем кнопку
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Очищаем форму
        this.reset();
    }, 4000);
});

// Анимация для элементов при скролле с задержкой
const staggeredObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

// Применяем к элементам с шутливым текстом
document.querySelectorAll('.humor-text, .character-quotes .quote').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    staggeredObserver.observe(element);
});

// Случайные подмигивания для элементов
function addRandomBlinks() {
    const elements = document.querySelectorAll('.protocol-result, .section-badge');
    setInterval(() => {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        randomElement.classList.add('blink');
        setTimeout(() => {
            randomElement.classList.remove('blink');
        }, 1000);
    }, 5000);
}

addRandomBlinks();
