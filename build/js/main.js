var mainNavToggle=document.querySelector(".main-nav__toggle"),mainNavOpened=document.querySelector(".main-nav--opened"),mainNavClosed=document.querySelector(".main-nav"),mainNav=document.querySelector(".main-nav"),pageHeader=document.querySelector(".page-header"),siteList=document.querySelector(".site-list");mainNavToggle.addEventListener("click",function(e){e.preventDefault(),mainNav.classList.toggle("main-nav--opened"),mainNav.classList.toggle("main-nav--closed"),mainNav.classList.contains("main-nav--opened")?(pageHeader.classList.add("page-header--relative"),siteList.classList.add("site-list--opened")):(pageHeader.classList.remove("page-header--relative"),siteList.classList.remove("site-list--opened"))});