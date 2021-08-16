translateText(); // Apply initial translation once the page is loaded


const sections = document.querySelectorAll('.anchor');
const listItems = document.querySelectorAll('#nav-menu li');
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 300) { // -X: offset, to highlight links earlier
            currentSection = section.getAttribute('id');
        }
    })

    listItems.forEach(li => {
        li.classList.remove('current');
        if(li.firstElementChild.getAttribute('href') == '#'+currentSection) {
            li.classList.add('current');
        }
    })
})


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
}
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
}


function switchLanguage() {
    if (localStorage.getItem('language') == 'en') {
        localStorage.setItem('language', 'lt');
    }
    else {
        localStorage.setItem('language', 'en');
    }

    translateText();
}


function switchTheme() {
    const themeSwitcher = document.getElementById('theme-switch');
    var themeableElements = document.getElementsByClassName('themeable');

    if(themeSwitcher.classList == 'fas fa-moon') {
        for(var i = 0; i < themeableElements.length; i++) {
            themeableElements[i].classList.add('dark-theme');
        }
        themeSwitcher.classList = 'fas fa-sun';
    } else {
        for(var i = 0; i < themeableElements.length; i++) {
            themeableElements[i].classList.remove('dark-theme');
        }
        themeSwitcher.classList = 'fas fa-moon';
    }
}


function translateText() {
    let translationFields = document.getElementsByClassName('translatable');
    let translationsEn = ['Home', 'Projects', 'Language', 'Junior Front-end Web Developer', 'Projects'];
    let translationsLt = ['Pagrindinis', 'Projektai', 'Kalba', 'Pradedantysis Front-end Tinklalapių Kūrėjas', 'Projektai'];

    for(var i = 0; i < translationFields.length; i++) {
        if (localStorage.getItem('language') == 'lt') {
            translationFields[i].textContent = translationsLt[i];
        } else {
            translationFields[i].textContent = translationsEn[i];
        }
    }
}