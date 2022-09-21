'use strict'

// Ждем загрузку контента

    
// ВСПЛЫВАЮЩЕЕ ОКНО

// const body = document.querySelector('body')

const marketButton = document.querySelector('.market')
const bankButton = document.querySelector('.bank')
const bobrDrive = document.querySelector('.avto')
// const currentPopup = document.getElementById('popup')

// Вешаем ссылки на кнопки

if (bankButton) {
    bankButton.addEventListener('click', () => {
        window.open('https://bobrarium.ru/bobrbank', '_blank')
    })
}

if (bobrDrive) {
    bobrDrive.addEventListener('click', () => {
        window.open('https://bobrarium.ru/bobrdrive', '_blank')
    })
}

if (marketButton) {
    marketButton.addEventListener('click', () => {
        window.open('https://klyukinm.github.io/', '_blank')
    })
}

// // Вешаем всплывающее окно на кнопку

// if (marketButton) {
//     marketButton.addEventListener('click', (event) => {
//         popupOpen(currentPopup)
//         event.preventDefault()
//     })
// }


// const lockPadding = document.querySelectorAll('.lock-padding')

// // Переменная необходимая для предотвращения двойных нажатий
// let unlock = true

// // Значение длительности анимации взятое с CSS свойства transition
// const timeout = 800



// // Вешаем событие на ссылки для закрытия окон
// const popupCloseIcon = document.querySelectorAll('.close-popup')
// if (popupCloseIcon.length > 0) {
//     for (let i = 0; i < popupCloseIcon.length; i++) {
//         const el = popupCloseIcon[i]
//         el.addEventListener('click', e => {
//             // Функция popupClose будет искать ближайший объект с классом popup, чтобы закрыть его
//             popupClose(el.closest('.popup'))
//             e.preventDefault()
//         })
//     }
// }

// // Функция открытия всплывающих окон
// function popupOpen(currentPopup) {
//     if (currentPopup && unlock) {
//         // Заполняем попап окно текстом
//         const popupText = document.querySelector('.popup__text__container')        

//         const popupActive = document.querySelector('.popup.open')
//         // На случай ссылки на всплывающее окно в другом всплывающем окне
//         // Проверяем есть ли уже открытое окно на момент нажатия ссылки на новое
//         if (popupActive) {
//             // Если есть, закрываем его и запрещаем выполнять bodyUnLock()
//             popupClose(popupActive, false)
//         } else {
//             // Блокируем скролл контента под окном
//             // bodyLock()
//         }
//         currentPopup.classList.add('open')
//         currentPopup.addEventListener('click', e => {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'))
//             }
//         })
//     }
// }

// // Передаем в функцию открытое всплывающее окно, ранее присвоенное переменной popupActive
// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open')
//         if (doUnlock) {
//             // bodyUnLock()
//         }
//         // Очищаем форму
        
//     }
// }

// // function bodyLock() {
// //     // Высчитываем разницу между шириной экрана и шириной объекта, находящемся на нем
// //     // Делается это, чтобы получить ширину скролла
// //     // Без этого при открытии выпадающего окна будет происходить сдвиг контента из-за исчезновения скролла справа
// //     const lockPaddingValue = window.innerWidth - document.querySelector('.wraper').offsetWidth + 'px';

// //     if (lockPadding.length > 0) {
// //         for (let i = 0; i < lockPadding.length; i++) {
// //             const el = lockPadding[i]
// //             // добавляем высчитанное выше значение lockPaddingValue в качестве padding-right ко всем объектам
// //             // с классом lock-padding, которые мы получили в начале
// //             el.style.paddingRight = lockPaddingValue
// //         }
// //     }
// //     // А также добавляем его к body
// //     body.style.paddingRight = lockPaddingValue
// //     // Убираем скролл при добавлении класса lock к body
// //     // Для этого в CSS пишем body.lock { overflow: hidden; }
// //     body.classList.add('lock')

// //     // Блокируем переменную unlock на время анимации, чтобы не реагировать на двойные клики
// //     // В противном случае можно словить ошибку скролла, который не исчезнет
// //     unlock = false
// //     setTimeout(function () {
// //         unlock = true
// //     }, timeout)
// // }

// // // Разблокировка скролла происходит с задержкой, чтобы избежать дергания всплывающего окна при закрытиии
// // function bodyUnLock() {
// //     setTimeout(function () {
// //         if (lockPadding.length > 0) {
// //             for (let i = 0; i < lockPadding.length; i++) {
// //                 const el = lockPadding[i]
// //                 el.style.paddingRight = '0px'
// //             }
// //         }
// //         body.style.paddingRight = '0px'
// //         body.classList.remove('lock')
// //     }, timeout)

// //     unlock = false
// //     setTimeout(function () {
// //         unlock = true
// //     }, timeout)
// // }

// // Добавляем возможность закрытия всплывающего окна клавишей Esc

// // Для этого вешаем слышатель событий на все клавиши
// document.addEventListener('keydown', e => {
//     // И если нажата клавиша с кодом 27, то происходит закрытие всплывающего окна
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open')
//         popupClose(popupActive)
//     }
// })


