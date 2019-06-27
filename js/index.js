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
    openMenuButton.addEventListener('click', function (){
      if (menuStyle.display == 'block') {
        openPopupMenu();
      }
    });
    closePopupButton.addEventListener('click', closePopupMenu);
  
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
  var modalCloseButtons = document.querySelector('.modal__close');
  var modalLayout = document.querySelector('.modal');
  var modalSearch = document.querySelector('.modal__search');
  var openRegionButton = document.querySelector('.user-region__button');
  var modalUserRegion = document.querySelector('.modal__user-region');
  var modalCloseUserRegionButton = document.querySelector('.modal__close-user-region');
  var modalActiveClass = 'modal__active';
  var modalFlexClass = 'modal__flex';
  var userRegionButtonAgree = document.querySelector('.modal__user-region-button');
  var openChooseRegionButton = document.querySelector('.modal__choose-user-region-button');
  var modalCloseChooseRegionButton = document.querySelector('.modal__close-choose-region');
  var modalChooseRegion = document.querySelector('.modal__choose-region');

  //функции работы модальных окон

  openRegionButton.addEventListener('click', openUserRegion);
  searchOpenButton.addEventListener('click', openSearch);
  modalCloseButtons.addEventListener('click', closeModal);
  modalCloseUserRegionButton.addEventListener('click', closeModal);
  userRegionButtonAgree.addEventListener('click', closeModal);
  openChooseRegionButton.addEventListener('click', openChooseRegion);
  modalCloseChooseRegionButton.addEventListener('click', closeModal);

  function openSearch() {
    if (menuStyle.display == 'block') {
      closePopupMenu();
    }
    modalLayout.classList.add(modalActiveClass);
    modalCloseButtons.classList.add(modalActiveClass);
    modalSearch.classList.add(modalFlexClass);
    modalUserRegion.classList.remove(modalFlexClass);
  };

  function closeModal() {
    if (menuStyle.display == 'block') {
      closePopupMenu();
    }
    modalLayout.classList.remove(modalActiveClass);
    modalCloseButtons.classList.remove(modalActiveClass);
    modalSearch.classList.remove(modalFlexClass);
    modalCloseUserRegionButton.classList.remove(modalActiveClass);
    modalChooseRegion.classList.remove(modalFlexClass);
    modalCloseChooseRegionButton.classList.remove(modalActiveClass);
  };

  function openUserRegion() {
    if (menuStyle.display == 'block') {
      closePopupMenu();
    }
    modalLayout.classList.add(modalActiveClass);
    modalCloseButtons.classList.add(modalActiveClass);
    modalUserRegion.classList.add(modalFlexClass);
    modalCloseUserRegionButton.classList.add(modalActiveClass);
  };

  function openChooseRegion() {
    if (menuStyle.display == 'block') {
      closePopupMenu();
    }
    modalUserRegion.classList.remove(modalFlexClass);
    modalCloseUserRegionButton.classList.remove(modalActiveClass);
    modalLayout.classList.add(modalActiveClass);
    modalCloseButtons.classList.add(modalActiveClass);
    modalChooseRegion.classList.add(modalFlexClass);
    modalCloseChooseRegionButton.classList.add(modalActiveClass);
  };

}());