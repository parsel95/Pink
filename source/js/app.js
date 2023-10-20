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

// Padding для изображений котов до и после на Планшетном разрешении

let imagesFrame = document.querySelector('.promo__image');
const tabletWidthMediaQuery = window.matchMedia('(min-width: 660px) and (max-width: 999px)');
let baseWidth = 660;
const notMobileWidthMediaQuery = window.matchMedia('(min-width: 660px)');
const mobileWidthMediaQuery = window.matchMedia('(max-width: 659px)');
const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');
const effectTitle = document.querySelector('.effect__title');

function printLog (isMobileSize) {
  let imagesFramePosition = (window.innerWidth - baseWidth)  + 'px';

  const size = isMobileSize ? imagesFrame.style.left = imagesFramePosition :
  window.matchMedia('(min-width: 1000px)').matches ? imagesFrame.style.left = 47 + 'px' :
  window.matchMedia('(max-width: 659px)').matches ? imagesFrame.style.left = 0 + 'px':
  imagesFrame.style.left = 0 + 'px';

  if (isMobileSize) {
    effectTitle.innerHTML = "Эффект<br> на 24 часа!"
    console.log('br добавлен')
  } else {
    effectTitle.innerHTML = "Эффект на 24 часа!"
  }

  console.log(`Padding у Images: ${size}`)
}

printLog(tabletWidthMediaQuery.matches);

tabletWidthMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches)
});

function resizeWidthOnly(a,b) {
  var c = [window.innerWidth];
  return onresize = function() {
    var d = window.innerWidth,
        e = c.length;
    c.push(d);
    if(c[e]!==c[e-1]){
      clearTimeout(b);
      b = setTimeout(a, 50);
    }
  }, a;
}

resizeWidthOnly(function() {
  imagesFramePosition = (window.innerWidth - baseWidth)  + 'px';
});