'use strict'

// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const startButton = document.querySelector('.slider__button_start');
const middleButton = document.querySelector('.slider__button_middle');
const lastButton = document.querySelector('.slider__button_last');

const startSlider = slider.querySelector('.slider__item_who');
const middleSlider = slider.querySelector('.slider__item_for-mom');
const lastSlider = slider.querySelector('.slider__item_for-a-child');

const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
const activeButton = 'slider__button_active';
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
startButton.addEventListener('click', showStartSlide);
middleButton.addEventListener('click', showMiddleSlide);
lastButton.addEventListener('click', showlastSlide);


function showStartSlide() {
    startButton.classList.add(activeButton);  
    middleButton.classList.remove(activeButton);
    lastButton.classList.remove(activeButton);

    startSlider.style.display = 'block';
    middleSlider.style.display = 'none';
    lastSlider.style.display = 'none';
}

function showMiddleSlide() {

    startButton.classList.remove(activeButton);  
    middleButton.classList.add(activeButton);
    lastButton.classList.remove(activeButton);

    startSlider.style.display = 'none';
    middleSlider.style.display = 'block';
    lastSlider.style.display = 'none';
}

function showlastSlide() {

    startButton.classList.remove(activeButton);  
    middleButton.classList.remove(activeButton);
    lastButton.classList.add(activeButton);

    startSlider.style.display = 'none';
    middleSlider.style.display = 'none';
    lastSlider.style.display = 'block';
}

// Инициализация слайдера
updateSlider();