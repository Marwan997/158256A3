
const navSlide = () => {
	const menuIcon = document.querySelector('.mobilenav');
	const nav = document.querySelector('.topnavlinks');
	const navLinks = document.querySelectorAll('.topnavlinks li')
	/*Toggle menu*/
	menuIcon.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
	});
}

navSlide();

