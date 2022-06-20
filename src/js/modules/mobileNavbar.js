// Мобильное меню
const menuBtn = document.querySelector('.nav-panel-mobile-btn');
const menu = document.querySelector('.nav-panel-mobile');

if(menuBtn) {
	menuBtn.addEventListener('click', (e) => {
		document.body.classList.toggle('lock');
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

// Прокрутка при клике
function onMenuLinkClick(e) {
	const menuLink = e.target;
	offMenuLinkClick();
	menuLink.classList.add('active-link');
	if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		});

		e.preventDefault();
	}
}

function offMenuLinkClick() {
	let menuLinkActive = document.querySelector('.nav-panel-link.active-link');
	if(menuLinkActive) {
		menuLinkActive.classList.remove('active-link');
	}
}

function scrollActiveLink() {
	let mainSection = document.querySelectorAll('.content-section');
	mainSection.forEach((v, i) => {
		let rect = v.getBoundingClientRect().top;
		if (rect < window.innerHeight - window.innerHeight / 2) {
			menuLinks.forEach(v => v.classList.remove('active-link'));
			menuLinks[i].classList.add('active-link');
		}
	});
}

// Скролл при десктопе
const menuLinksDesktop = document.querySelectorAll('.nav-panel-desktop .nav-panel-link[data-goto]');

if(menuLinksDesktop.length > 0) {
	window.onscroll = (() => {
		scrollActiveLink();
	})
	window.onload = (() => {
		scrollActiveLink();
	})

    menuLinksDesktop.forEach((menuLink) => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
}

// Скролл при мобильном устройстве
const menuLinksMobile = document.querySelectorAll('.nav-panel-mobile .nav-panel-link[data-goto]');

if(menuLinksMobile.length > 0) {
	window.onscroll = (() => {
		scrollActiveLink();
	})
	window.onload = (() => {
		scrollActiveLink();
	})

    menuLinksMobile.forEach((menuLink) => {
        menuLink.addEventListener('click', onMenuLinkClickMobile);
    });

    function onMenuLinkClickMobile(e) {
        const menuLink = e.target;
		offMenuLinkClick();
		menuLink.classList.add('active-link');
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

			if(menuBtn.classList.contains('active')) {
				document.body.classList.remove('lock');
				menuBtn.classList.remove('active');
				menu.classList.remove('active');
			}

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}