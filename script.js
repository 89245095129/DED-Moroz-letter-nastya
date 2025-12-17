// Простой безопасный скрипт без eval и динамических стилей
document.addEventListener('DOMContentLoaded', function() {
    // Создание снежинок
    function createSnowflakes() {
        const snowflakesContainer = document.querySelector('.snowflakes');
        const snowflakeCount = 50;
        
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❄';
            
            // Случайные параметры
            const size = Math.random() * 20 + 10;
            const startPosition = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 10;
            const opacity = Math.random() * 0.7 + 0.3;
            const delay = Math.random() * 10;
            
            // Применяем стили напрямую
            snowflake.style.position = 'absolute';
            snowflake.style.top = '-20px';
            snowflake.style.left = startPosition + '%';
            snowflake.style.fontSize = size + 'px';
            snowflake.style.color = 'white';
            snowflake.style.opacity = opacity;
            snowflake.style.animation = 'fall ' + animationDuration + 's linear infinite';
            snowflake.style.animationDelay = delay + 's';
            snowflake.style.pointerEvents = 'none';
            snowflake.style.zIndex = '1';
            
            snowflakesContainer.appendChild(snowflake);
        }
    }
    
    // Добавление дополнительных снежинок
    function addMoreSnow() {
        const snowflakesContainer = document.querySelector('.snowflakes');
        const extraCount = 30;
        
        for (let i = 0; i < extraCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('extra-snowflake');
            snowflake.innerHTML = '❅';
            
            const size = Math.random() * 25 + 15;
            const startPosition = Math.random() * 100;
            const animationDuration = Math.random() * 8 + 8;
            const opacity = Math.random() * 0.8 + 0.2;
            const delay = Math.random() * 5;
            
            snowflake.style.position = 'absolute';
            snowflake.style.top = '-20px';
            snowflake.style.left = startPosition + '%';
            snowflake.style.fontSize = size + 'px';
            snowflake.style.color = '#e3f2fd';
            snowflake.style.opacity = opacity;
            snowflake.style.animation = 'fallFast ' + animationDuration + 's linear infinite';
            snowflake.style.animationDelay = delay + 's';
            snowflake.style.pointerEvents = 'none';
            snowflake.style.zIndex = '1';
            snowflake.style.textShadow = '0 0 8px white';
            
            snowflakesContainer.appendChild(snowflake);
        }
    }
    
    // Мерцание ёлочных огней
    function toggleChristmasLights() {
        const letterBorder = document.querySelector('.letter-border');
        const lightsBtn = document.getElementById('lightsBtn');
        
        if (letterBorder.classList.contains('lights-on')) {
            letterBorder.classList.remove('lights-on');
            letterBorder.style.animation = 'borderGlow 4s infinite alternate';
            lightsBtn.innerHTML = '<i class="fas fa-tree"></i> Мерцание ёлки';
        } else {
            letterBorder.classList.add('lights-on');
            letterBorder.style.animation = 'starLights 2s infinite alternate';
            lightsBtn.innerHTML = '<i class="fas fa-tree"></i> Выключить мерцание';
        }
    }
    
    // Управление музыкой
    function toggleMusic() {
        const music = document.getElementById('bgMusic');
        const musicBtn = document.getElementById('musicBtn');
        
        if (music.paused) {
            music.play().then(() => {
                musicBtn.innerHTML = '<i class="fas fa-volume-up"></i> Выключить музыку';
            }).catch(error => {
                console.log('Ошибка воспроизведения музыки:', error);
                musicBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Нажмите ещё раз';
            });
        } else {
            music.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Включить музыку';
        }
    }
    
    // Инициализация
    createSnowflakes();
    
    // Назначаем обработчики кнопок
    document.getElementById('musicBtn').addEventListener('click', toggleMusic);
    document.getElementById('snowBtn').addEventListener('click', addMoreSnow);
    document.getElementById('lightsBtn').addEventListener('click', toggleChristmasLights);
    
    // Интерактивность письма
    const letterContent = document.querySelector('.letter-content');
    if (letterContent) {
        letterContent.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        letterContent.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Анимация кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Подготовка музыки
    const music = document.getElementById('bgMusic');
    if (music) {
        music.volume = 0.3;
        music.preload = 'auto';
    }
});
