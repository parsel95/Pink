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

// Padding для изображений телефона в promo до и после на планшетном разрешении

let imagesFrame = document.querySelector('.promo__image');
const tabletWidthMediaQuery = window.matchMedia('(min-width: 660px) and (max-width: 999px)');
let baseWidth = 660;
const mobileWidthMediaQuery = window.matchMedia('(max-width: 659px)');
const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');


function printLog (isMobileSize) {
  let imagesFramePosition = (window.innerWidth - baseWidth)  + 'px';

  const size = isMobileSize ? imagesFrame.style.left = imagesFramePosition :
  window.matchMedia('(min-width: 1000px)').matches ? imagesFrame.style.left = 47 + 'px' :
  window.matchMedia('(max-width: 659px)').matches ? imagesFrame.style.left = 0 + 'px':
  imagesFrame.style.left = 0 + 'px';

  console.log(`Padding у Images: ${size}`)
};

window.addEventListener('resize', function () {
  printLog(tabletWidthMediaQuery.matches);
});

// br в секции effect при планшетном разрешении

let effectTitle = document.querySelector('.effect__title');

if (tabletWidthMediaQuery.matches) {
  effectTitle.innerHTML = "Эффект<br> на 24 часа!"
  console.log('br добавлен')
} else {
  effectTitle.innerHTML = "Эффект на 24 часа!"
}

function addBrEffect (isMobileSize) {
  isMobileSize ? effectTitle.innerHTML = "Эффект<br> на 24 часа!" : effectTitle.innerHTML = "Эффект на 24 часа!";
};

window.addEventListener('resize', function () {
  addBrEffect(tabletWidthMediaQuery.matches);
});

// Слайдер по отзывам

let reviewsToggles = document.querySelector('.toggles--reviews');
let reviewsButtons = reviewsToggles.querySelectorAll('button');
let reviewsItems = document.querySelectorAll('.reviews__item');

for (let i = 0; i < reviewsButtons.length; i++) {
  reviewsButtons[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    slideSwitchReviews(reviewsButtons[i].dataset.name)
  });
};

function slideSwitchReviews(slideNumberDelivery) {
  if (typeof slideNumberDelivery === 'number') {
    for (let i = 0; i < reviewsItems.length; i++) {
      if (i != slideNumberDelivery) {
        reviewsItems[i].classList.remove('reviews__item--active');
        reviewsButtons[i].classList.remove('toggles__button--reviews--active');
      } else {
        reviewsItems[i].classList.add('reviews__item--active');
        reviewsButtons[i].classList.add('toggles__button--reviews--active');
      }
    }
  } else {
    for (let i = 0; i < reviewsItems.length; i++) {
      if (reviewsItems[i].dataset.name != slideNumberDelivery) {
        reviewsItems[i].classList.remove('reviews__item--active');
        reviewsButtons[i].classList.remove('toggles__button--reviews--active');
      } else {
        reviewsItems[i].classList.add('reviews__item--active');
        reviewsButtons[i].classList.add('toggles__button--reviews--active');
      }
    }
  }
};

let reviewPrev = document.querySelector('.reviews__arrow--left');
let reviewNext = document.querySelector('.reviews__arrow--right');
let currentSlide = 0;

function validSlideNumberCheck(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = reviewsItems.length - 1;
  } else if (slideNumber > reviewsItems.length - 1) {
    validNumber = 0;
  }

  currentSlide = validNumber;

  return currentSlide;
};

reviewPrev.onclick = function(evt){
  evt.preventDefault();
  let newSlide = currentSlide - 1;
  slideSwitchReviews(validSlideNumberCheck(newSlide));
};

reviewNext.onclick = function(evt){
  evt.preventDefault();
  let newSlide = currentSlide + 1;
  slideSwitchReviews(validSlideNumberCheck(newSlide));
};

// Слайдер по тарифам

let ratesToggles = document.querySelector('.toggles--rates');
let ratesButtons = ratesToggles.querySelectorAll('button');
let ratesItems = document.querySelectorAll('.rates__item');

for (let i = 0; i < ratesButtons.length; i++) {
  ratesButtons[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    slideSwitchRates(ratesButtons[i].dataset.name);
  });
};

function slideSwitchRates(slideNumberDelivery) {
  if (typeof slideNumberDelivery === 'number') {
    for (let i = 0; i < ratesItems.length; i++) {
      if (i != slideNumberDelivery) {
        ratesItems[i].classList.remove('rates__item--active');
        ratesButtons[i].classList.remove('toggles__button--rates--active');
      } else {
        ratesItems[i].classList.add('rates__item--active');
        ratesButtons[i].classList.add('toggles__button--rates--active');
      }
    }
  } else {
    for (let i = 0; i < ratesItems.length; i++) {
      if (ratesItems[i].dataset.name != slideNumberDelivery) {
        ratesItems[i].classList.remove('rates__item--active');
        ratesButtons[i].classList.remove('toggles__button--rates--active');
      } else {
        ratesItems[i].classList.add('rates__item--active');
        ratesButtons[i].classList.add('toggles__button--rates--active');
      }
    }
  }
};

// Добавление класса rate__item для rate--list

let rateList = document.querySelector('.rate--list');
const notMobileWidthMediaQuery = window.matchMedia('(min-width: 660px)');

window.addEventListener('resize', function () {
  if (notMobileWidthMediaQuery.matches) {
    rateList.classList.add('rates__item');
  } else {
    rateList.classList.remove('rates__item');
  }
});

// Left для тарифа Hit

let rateTitle = document.querySelector('.rate__title');
let rateHits = document.querySelectorAll('.rate__hit');

for (let rateHit of rateHits) {
  let rateHitLeftMobile = - (window.innerWidth - 320) / 2 + 107 + 'px';
  let rateHitLeftTablet = - (rateTitle.offsetWidth - 155) / 2 - 53 + 'px';

  if(mobileWidthMediaQuery.matches) {
    rateHit.style.left = rateHitLeftMobile;
  } else if (desktopMediaQuery.matches) {
    rateHit.style.left = "88 px"
  } else if (tabletWidthMediaQuery.matches) {
    rateHit.style.left = rateHitLeftTablet;
  }
}

function printLog2 (isMobileSize) {
  for (let rateHit of rateHits) {
    let rateHitLeftMobile = - (window.innerWidth - 320) / 2 + 107 + 'px';
    let rateHitLeftTablet = - (rateTitle.offsetWidth - 155) / 2 - 53 + 'px';

    const size = isMobileSize ? rateHit.style.left = rateHitLeftMobile : desktopMediaQuery.matches ? rateHit.style.left = "88 px" : tabletWidthMediaQuery.matches ?  rateHit.style.left = rateHitLeftTablet : rateHit.style.left = "88 px";

    console.log(`Left у rateHit: ${size}`)
  }
}

window.addEventListener('resize', function () {
  printLog2(mobileWidthMediaQuery.matches)
});

// Градиент у тарифов при переполнении в мобильной версии

let rates = document.querySelector('.rates');
let ratesList = document.querySelector('.rates__list');
let ratesLinearGradientWHiteMobile = 542 + ratesList.offsetHeight + "px";
let reviews = document.querySelector('.reviews');
let pageMainWrapper = document.querySelector('.page-main__wrapper');
let ratesWrapperLinearGradientTablet = 378 + (-(298 - reviews.offsetHeight)) + "px";
let ratesWrapperLinearGradientMobile = 361 + (-(298 - reviews.offsetHeight)) + "px";

if (mobileWidthMediaQuery.matches) {
  pageMainWrapper.style.backgroundImage = "linear-gradient(176.8deg, #fff " + ratesWrapperLinearGradientMobile + ", #f2f2f2 " + ratesWrapperLinearGradientMobile + ")"
}

function printLog3 (isMobileSize) {
  let ratesWrapperLinearGradientMobile = 361 + (-(298 - reviews.offsetHeight)) + "px";

  const size = isMobileSize ? pageMainWrapper.style.backgroundImage = "linear-gradient(176.8deg, #fff " + ratesWrapperLinearGradientMobile + ", #f2f2f2 " + ratesWrapperLinearGradientMobile + ")" : pageMainWrapper.style.backgroundImage = "linear-gradient(176.8deg, #fff " + ratesWrapperLinearGradientMobile + ", #f2f2f2 " + ratesWrapperLinearGradientMobile + ")";

  console.log(`ratesWrapperLinearGradientMobile: ${size}`);
}

window.addEventListener('resize', function () {
  printLog3(mobileWidthMediaQuery.matches)
});

// Градиент у тарифов при переполнении в планшетной и пк версиях

if(notMobileWidthMediaQuery.matches) {
  pageMainWrapper.style.backgroundImage = "linear-gradient(176.8deg, #fff " + ratesWrapperLinearGradientTablet + ", #f2f2f2 " + ratesWrapperLinearGradientTablet + ")"
}

function printLog4 (isMobileSize) {
  let ratesWrapperLinearGradientTablet = 378 + (-(298 - reviews.offsetHeight)) + "px";
  let ratesWrapperLinearGradientMobile = 361 + (-(298 - reviews.offsetHeight)) + "px";

  const size = isMobileSize ? pageMainWrapper.style.backgroundImage = "linear-gradient(176.8deg, #fff " + ratesWrapperLinearGradientTablet + ", #f2f2f2 " + ratesWrapperLinearGradientTablet + ")" : pageMainWrapper.style.backgroundImage = "linear-gradient(176.8deg, #fff " + ratesWrapperLinearGradientMobile + ", #f2f2f2 " + ratesWrapperLinearGradientMobile + ")";

  console.log(`ratesWrapperLinearGradientTablet: ${size}`);
}

window.addEventListener('resize', function () {
  printLog4(notMobileWidthMediaQuery.matches)
});

// Кастомная Иконка на яндекс карте

let center = [59.939352, 30.323324];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 15.5
  });

  let placemark = new ymaps.Placemark([59.938631, 30.323037], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/icons/map-marker.svg',
    iconImageSize: [36, 36],
    iconImageoffset: [0, 0]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.geoObjects.add(placemark);
}

ymaps.ready(init);


// Переполнение в Promo в мобильной версии

let download = document.querySelector('.download');
let pageHeader = document.querySelector('.page-header');

if (mobileWidthMediaQuery.matches) {
  pageHeader.style.paddingBottom = download.offsetHeight + 'px';
}

// Переполнение в promo в планшетной версии

if (tabletWidthMediaQuery.matches) {
  imagesFrame.style.bottom = (730 - pageHeader.offsetHeight) - 384 + 'px';
}

// Ориентация логотип html-academy при расширении social

let pageFooterDeveloper = document.querySelector('.page-footer__developer');
let pageFooterWrapper = document.querySelector('.page-footer__wrapper');

if (notMobileWidthMediaQuery.matches) {
  if (pageFooterWrapper.offsetHeight > 163)
  pageFooterDeveloper.style.alignSelf = 'start';
};