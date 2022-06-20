!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

let modalBtn = document.querySelectorAll('.js-open-modal');
const overlay = document.querySelector('.js-overlay-modal');
let closeBtn = document.querySelectorAll('.js-modal-close');
const body = document.querySelector('body');

modalBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let modalsId = item.getAttribute('data-modal');
        let modalsActive = document.querySelector('.modal[data-modal="'+ modalsId +'"]');

        modalsActive.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('lock');
    });
});

closeBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
        let parentModals = item.closest('.modal');

        parentModals.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('lock');
    });
});

document.body.addEventListener('keyup', (e) => {
    let key = e.keyCode;

    if(key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    };
}, false);

overlay.addEventListener('click', () => {
    document.querySelector('.modal.active').classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('lock');
});