function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
}


// var language;

// function getLanguage() {
//     (localStorage.getItem('language') == null) ? setLanguage('en') : false;
//     $.ajax({
//     url: '/language/' + localStorage.getItem('language') + '.json', 
//     dataType: 'json', async: false, dataType: 'json', 
//     success: function (lang) { language = lang } });
// }

function switchLanguage() {
    if (localStorage.getItem('language') == 'en') {
        localStorage.setItem('language', 'lt');
    }
    else {
        localStorage.setItem('language', 'en');
    }

    translateText();
}

function translateText() {
    if (localStorage.getItem('language') == 'lt') {
        document.getElementById('text-home').textContent = "Pagrindinis";
        document.getElementById('text-projects').textContent = "Projektai";
        document.getElementById('text-language').textContent = "Kalba";
        document.getElementById('text-subtitle').textContent = "Pradedantysis Front-end Tinklalapių Kūrėjas";
        document.getElementById('text-heading-projects').textContent = "Projektai";
    }
    else {
        document.getElementById('text-home').textContent = "Home";
        document.getElementById('text-projects').textContent = "Projects";
        document.getElementById('text-language').textContent = "Language";
        document.getElementById('text-subtitle').textContent = "Junior Front-end Web Developer";
        document.getElementById('text-heading-projects').textContent = "Projects";
    }
}