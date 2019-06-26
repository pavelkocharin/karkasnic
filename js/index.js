'use strict';

(function () {

  //для мобильного меню
  var popup = document.querySelector('.popup');
  var openMenuButton =  document.querySelector('.header__nav-mobile');
  var menuStyle = getComputedStyle(openMenuButton);
  var closePopupButton = document.querySelector('.popup__close');
  var popupActiveClass = 'popup__active';
  var popupContent = document.querySelector('.popup__content');
  var navMenu = document.querySelector('.nav');
  var desktopMenu = document.querySelector('.header__top-content-bottom');
  var userRegion = document.querySelector('.user-region');
  var desktopUserRegion = document.querySelector('.header__top-content-upper');
  var userLogin = document.querySelector('.login-block');

  //функции открытия/закрытия мобильной версии меню
  if (menuStyle.display == 'block') {
    openMenuButton.addEventListener('click', function (){
      openPopupMenu();
    });
    closePopupButton.addEventListener('click', function (){
      closePopupMenu();
    });
  };


  function openPopupMenu() {
    popup.classList.add(popupActiveClass);
    closePopupButton.classList.add(popupActiveClass);
    popupContent.appendChild(navMenu);
    popupContent.appendChild(userRegion);
    popupContent.appendChild(userLogin);
  };

  function closePopupMenu() {
    popup.classList.remove(popupActiveClass);
    closePopupButton.classList.remove(popupActiveClass);
    desktopUserRegion.appendChild(userRegion);
    desktopMenu.appendChild(navMenu);
    desktopMenu.appendChild(userLogin);
  };

  window.onresize = function() {
    if (popup.classList.contains(popupActiveClass) && menuStyle.display !== 'block') {
      closePopupMenu()
    };
  };


  //для модальных окон
  var searchOpenButton = document.querySelector('.login-block__search-button');
  var modalCloseButtons = document.querySelectorAll('.modal__close');
  var modalLayout = document.querySelector('.modal');
  var modalContent = document.querySelector('.modal__content');
  var modalActiveClass = 'modal__active';

  //функции работы модальных окон

  searchOpenButton.addEventListener('click', function (){
    openSearch();
  });

  function openSearch() {
    if (menuStyle.display == 'block') {
      closePopupMenu();
    }
    modalLayout.classList.add(modalActiveClass);
  }

}());