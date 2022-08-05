import {testFunction} from './scripts/test';
testFunction();

let nav = document.querySelector('.navigation');
let burger = document.querySelector('.header__burger');

burger.addEventListener('click', function(){
	burger.classList.toggle('_active');
	nav.classList.toggle('_active');
})
