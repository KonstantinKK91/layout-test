
const blockBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const closeBtn = document.getElementById('close');
const menuItemLinks = document.querySelectorAll('#menu-item li a');
const leftArrow = document.querySelector('.slider-project__arrow-left');
const rightArrow = document.querySelector('.slider-project__arrow-right');
const blockWithPictures = document.querySelector('.slider-project__pictures');

console.log(blockWithPictures.children.length)
//Добавляет класс active
let add = blockBurger.addEventListener('click', () => {
	headerMenu.classList.add('active')
});
//Eбирает класс active
let close = closeBtn.addEventListener('click', () => {
	headerMenu.classList.remove('active')
});

//Добавляет и убирает класс checked
for (let item of menuItemLinks) {
	item.addEventListener('click', (e) => {
		for (let link of menuItemLinks) {
			link.classList.remove('checked')
		}
		item.classList.add('checked');
	})
}

//slider
let point = 0;

rightArrow.addEventListener('click', () => {
	point += 258;
	if (point >= 258*(blockWithPictures.children.length - 4)) {
		point=0
	}
	blockWithPictures.style.left = -point + 'px';
})

leftArrow.addEventListener('click', () => {
	point -= 258;
	if (point <= 0) {
		point = 258*(blockWithPictures.children.length - 4)
	}
	blockWithPictures.style.left = -point + 'px';
})

