
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const timelinebir = document.querySelector('#timebir');
const timelineiki = document.querySelector('#timeiki');
const menubtn = document.querySelector('.menu-open');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#000';

	} else {
		header.style.backgroundColor = 'transparent';
		menubtn.style.backgroundColor = 'transparent';
	}
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


$(window).scroll(function() {
	var hT = $('#timebir').offset().top,
		hH = $('#timebir').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	 console.log(wS);
	if (wS = 2500){
	 $('#timebir').fadeIn(5500);
	}
 });