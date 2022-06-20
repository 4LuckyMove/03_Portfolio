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

// Определение активного языка на сайте
const lang = document.querySelectorAll('.link-lang');
const langSiteAll = document.querySelectorAll('.language-site');
const langMenu = document.querySelector('.language-site[data-lang-site="1"]');
const langSite = document.querySelector('.language-site[data-lang-site="2"]');

langSiteAll.forEach((item) =>{
	item.addEventListener('click', () => {
		idLangs = item.getAttribute('data-lang-site');
		ActiveLangs = document.querySelector('.language-site[data-lang-site="'+ idLangs +'"]');
		if(ActiveLangs === langMenu) {
			if(lang) {
				lang.forEach((item) => {
					item.addEventListener('click', () => {
						let langId = item.getAttribute('data-lang');
						let langActive = document.querySelector('.link-lang[data-lang="'+ langId +'"]');
						let langUkr = document.querySelector('.link-lang[data-lang="ukr"]');
						let langEng = document.querySelector('.link-lang[data-lang="eng"]');

						if(langActive ===  langUkr) {
							langActive.classList.add('active');
							langEng.classList.remove('active');
						}

						if(langActive ===  langEng) {
							langUkr.classList.remove('active');
							langActive.classList.add('active');
						}
					});
				});
			}
		} else if(ActiveLangs === langSite) {
			if(lang) {
				lang.forEach((item) => {
					item.addEventListener('click', () => {
						let langId = item.getAttribute('data-lang');
						let langActive = document.querySelector('.link-lang[data-lang="'+ langId +'"]');
						let langUkr = document.querySelector('.link-lang[data-lang="ukr"]');
						let langEng = document.querySelector('.link-lang[data-lang="eng"]');
						if(langActive ===  langUkr) {
							langActive.classList.add('active');
							langEng.classList.remove('active');
						}
						if(langActive ===  langEng) {
							langUkr.classList.remove('active');
							langActive.classList.add('active');
						}
					});
				});
			}
		}
	});
});

if(lang) {
	lang.forEach((item) => {
		item.addEventListener('click', () => {
			let langId = item.getAttribute('data-lang');
			let langActive = document.querySelector('.link-lang[data-lang="'+ langId +'"]');
			let langUkr = document.querySelector('.link-lang[data-lang="ukr"]');
			let langEng = document.querySelector('.link-lang[data-lang="eng"]');

			if(langActive ===  langUkr) {
				langActive.classList.add('active');
				langEng.classList.remove('active');
			}

			if(langActive ===  langEng) {
				langUkr.classList.remove('active');
				langActive.classList.add('active');
			}
		});
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.nav-panel-link[data-goto]');

if(menuLinks.length > 0) {
	window.onscroll = (() => {
		scrollActiveLink();
	})
	window.onload = (() => {
		scrollActiveLink();
	})

    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
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
}