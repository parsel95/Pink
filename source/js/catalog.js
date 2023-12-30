// Гамбургер

const navElement = document.querySelector('.page-header__nav');
const buttonElement = document.querySelector('.page-header__toggler');

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

// br в секции post-list при планшетном разрешении

const notMobileWidthMediaQuery = window.matchMedia('(min-width: 660px)');
let postListSubheading = document.querySelector('.post-list__subheading');

if (notMobileWidthMediaQuery.matches) {
  postListSubheading.innerHTML = "Взгляните на фотографии, которые выкладывают пользователи! Видите, как не хватает ваших?";
  console.log('br добавлен');
} else {
  postListSubheading.innerHTML = "Взгляните на фотографии, которые выкладывают пользователи!<br> Видите, как не хватает ваших?";
}

function addBrPostList (isMobileSize) {
  isMobileSize ? postListSubheading.innerHTML = "Взгляните на фотографии, которые выкладывают пользователи! Видите, как не хватает ваших?" : postListSubheading.innerHTML = "Взгляните на фотографии, которые выкладывают пользователи!<br> Видите, как не хватает ваших?";
};

window.addEventListener('resize', function () {
  addBrPostList(notMobileWidthMediaQuery.matches);
});

// padding-top в post--panorama

let postPanorama = document.querySelector('.post--panorama');
let postPanoramaImg = document.querySelector('.post--panorama .post__img');

// Слайдер в редакторе фото

let formEditorLinks = document.querySelectorAll('.form-editor__link');
let formEditorSlides = document.querySelectorAll('.form-editor__item');

for (let i = 0; i < formEditorLinks.length; i++) {
  formEditorLinks[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    slideSwitchFormEditor(formEditorLinks[i].dataset.name)
  });
};

function slideSwitchFormEditor(slideNumberFormEditor) {
  if (typeof slideNumberFormEditor === 'number') {
    for (let i = 0; i < formEditorSlides.length; i++) {
      if (i != slideNumberFormEditor) {
        formEditorSlides[i].classList.remove('form-editor__item--active');
      } else {
        formEditorSlides[i].classList.add('form-editor__item--active');
      }
    }
  } else {
    for (let i = 0; i < formEditorSlides.length; i++) {
      if (formEditorSlides[i].dataset.name != slideNumberFormEditor) {
        formEditorSlides[i].classList.remove('form-editor__item--active');
      } else {
        formEditorSlides[i].classList.add('form-editor__item--active');
      }
    }
  }
};

// Добавление класса container для обёртки редактора изображения, чтобы управлять цветом фона

const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');
let yourPhotoContainer = document.querySelector('.your-photo__container');
let yourPhotoWrapper = document.querySelector('.your-photo__wrapper');

if (desktopMediaQuery.matches) {
  yourPhotoContainer.classList.remove('container');
  yourPhotoWrapper.classList.add('container');
}

// Кнопка лайка

let postLikes = document.querySelectorAll('.post__like');


for (let i=0; i < postLikes.length; i++) {

}