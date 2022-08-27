'use strict'

// Ждем загрузку контента
window.onload = function () {    

    const parallax = document.querySelector('.parallax');

    if (parallax) {        
        const clouds = document.querySelector('.images-parallax__mountains');        
        const fence = document.querySelector('.images-parallax__fence');

        // Коэффициенты
        const forClouds = -30;        
        const forFence = 20;

        // Скорость анимации
        const speed = 0.1;

        // Объявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // Передаем стили
            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%)`;            
            fence.style.cssText = `transform: translate(${positionX / forFence}%,${positionY / forFence}%)`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function (e) {
            // Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Ноль в середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Получаем проценты
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
        
    }
}

