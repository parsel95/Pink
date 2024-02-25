// Гамбургер

let navElement = document.querySelector('.page-header__nav');
let buttonElement = document.querySelector('.page-header__toggler');

navElement.classList.add('page-header__nav--closed');

buttonElement.addEventListener('click', () => {
  if (navElement.classList.contains('page-header__nav--closed')) {
    navElement.classList.add('page-header__nav--opened');
    navElement.classList.remove('page-header__nav--closed');
  } else {
    navElement.classList.add('page-header__nav--closed');
    navElement.classList.remove('page-header__nav--opened');
  }
});

// Добавление текста к promo в tablet

let formSubheading = document.querySelector('.page-main__subheading');
const notMobileWidthMediaQuery = window.matchMedia('(min-width: 660px)');

if (notMobileWidthMediaQuery.matches) {
  formSubheading.innerHTML = "Поделитесь своей историей и получите шанс выиграть ценный приз — 1000 миль на вашу бонусную карту! Пожалуйста, заполните форму ниже:"
} else {
  formSubheading.innerHTML = "Поделитесь своей историей и получите шанс выиграть ценный приз — 1000 миль на вашу бонусную карту!"
};

// Добавление класса field-group__heading для legend у каждого fieldset и удаление класса field-group__heading у field-group__heading

let fieldGroupHeadings = document.querySelectorAll('.field-group__heading');
let fieldGroupLegends = document.querySelectorAll('.field-group__legend');

for (let i = 0; i < fieldGroupHeadings.length; i++) {
  if (notMobileWidthMediaQuery.matches) {
    fieldGroupHeadings[i].classList.remove('field-group__heading');
    fieldGroupHeadings[i].classList.add('visually-hidden');
  }
};

for (let i = 0; i < fieldGroupLegends.length; i++) {
  if (notMobileWidthMediaQuery.matches) {
    fieldGroupLegends[i].classList.remove('visually-hidden');
    fieldGroupLegends[i].classList.add('field-group__heading');
  }
};

// удаление класса container у всех field-group__wrapper при не мобильно разрешении и удаление класса container у form__container при мобильном разрешении

let fieldGroupWrappers = document.querySelectorAll('.field-group__wrapper');

for (let i = 0; i < fieldGroupWrappers.length; i++) {
  if (notMobileWidthMediaQuery.matches) {
    fieldGroupWrappers[i].classList.remove('container');
  }
};

const mobileWidthMediaQuery = window.matchMedia('(max-width: 659px)');
let formContainer = document.querySelector('.form__container');

if (mobileWidthMediaQuery.matches) {
  formContainer.classList.remove('container');
};

// изменение текста в form__special-text при десктопном разрешении

const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');
let formAdditionalText = document.querySelector('.form__additional-text');

if (desktopMediaQuery.matches) {
  formAdditionalText.textContent = ' — обязательные для заполнения поля';
};
