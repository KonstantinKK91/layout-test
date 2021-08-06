const blockBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.header__close-menu');
const menuItemLinks = document.querySelectorAll('.header__nav a');
const leftArrow = document.querySelector('.slider-project__arrow-left');
const rightArrow = document.querySelector('.slider-project__arrow-right');
let downArrow = document.querySelector('.slider-project__arrow-down');
const blockWithPictures = document.querySelector('.slider-project__pictures');
const body = document.querySelector('body');

//Добавляет класс active
blockBurger.addEventListener('click', () => {
	headerMenu.classList.add('active');
	body.style.overflow = 'hidden'; //block scroll
});


//Убирает класс active
closeBtn.addEventListener('click', () => {
	headerMenu.classList.toggle('active');
	body.style.overflow = 'auto';
})


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

downArrow.addEventListener('click', () => {
	point += 258;
	if (point >= 258 * (blockWithPictures.children.length - 4)) {
		point = 0;
	}
	blockWithPictures.style.left = -point + 'px';
})

rightArrow.addEventListener('click', () => {
	point += 258;
	if (point >= 258 * (blockWithPictures.children.length - 4)) {
		point = 0;
	}
	blockWithPictures.style.left = -point + 'px';
})

leftArrow.addEventListener('click', () => {
	point -= 258;
	if (point <= 0) {
		point = 258 * (blockWithPictures.children.length - 4)
	}
	blockWithPictures.style.left = -point + 'px';
})

