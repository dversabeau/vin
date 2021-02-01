window.addEventListener('load', function () {
    const navbar = document.getElementsByTagName('nav');
    const  menu = document.getElementById('menu');
    const left_link = document.getElementById('left__link');
    const right_link = document.getElementById('right__link');
    const burger_white = document.getElementById('burger--white');
    const burger_black = document.getElementById('burger--black');
    const backgrounds_clair = [].slice.call(document.getElementsByClassName('menu--black'));
    const sections = [].slice.call(document.querySelectorAll('section'));
    const close_menu = document.getElementById('close--menu');
    const accueil_link = document.getElementById('accueil__link');
    const vins__link = document.getElementById('vins__link');
    const domaine__link = document.getElementById('domaine__link');
    const contact__link = document.getElementById('contact__link');

    isMobileMenu();
    whiteOrBlackHamburger();
    whiteOrBlackNavbarLink();
    setMenuMobile();
    setNavigateLink();
    isActivateLink();

    window.addEventListener('resize', function () {
        menu.classList.remove('menu--toggle');
        isMobileMenu();
        setMenuMobile();
        whiteOrBlackHamburger();
        whiteOrBlackNavbarLink();
        setNavigateLink();
        isActivateLink();
    })

    window.addEventListener('scroll', function () {
        menu.classList.remove('menu--toggle');
        whiteOrBlackHamburger();
        whiteOrBlackNavbarLink();
        isActivateLink();
    })

    window.addEventListener('mousewheel', function () {
        menu.classList.remove('menu--toggle');
        whiteOrBlackHamburger();
        whiteOrBlackNavbarLink();
        isActivateLink();
    })

    function isMobileMenu() {
        if (window.innerWidth < 450){
            menu.classList.add('mobile');
        } else {
            menu.classList.remove('mobile');
        }
    }


    function whiteOrBlackHamburger() {
        if (window.innerWidth < 450){
            if (window.pageYOffset >= backgrounds_clair[0].offsetTop + backgrounds_clair[0].parentNode.offsetTop &&
                window.pageYOffset <= backgrounds_clair[0].offsetTop + backgrounds_clair[0].parentNode.offsetTop + backgrounds_clair[0].offsetHeight ){
                burger_white.classList.remove('display');
                burger_black.classList.add('display');
            }  else if (window.pageYOffset >= backgrounds_clair[1].offsetTop + backgrounds_clair[1].parentNode.offsetTop &&
                window.pageYOffset <= backgrounds_clair[1].offsetTop + backgrounds_clair[1].parentNode.offsetTop + backgrounds_clair[1].offsetHeight ){
                burger_white.classList.remove('display');
                burger_black.classList.add('display');
            } else if (window.pageYOffset >= backgrounds_clair[2].offsetTop + backgrounds_clair[2].parentNode.offsetTop &&
                window.pageYOffset <= backgrounds_clair[2].offsetTop + backgrounds_clair[2].parentNode.offsetTop + backgrounds_clair[2].offsetHeight ){
                burger_white.classList.remove('display');
                burger_black.classList.add('display');
            } else {
                burger_white.classList.add('display');
                burger_black.classList.remove('display');
            }
        } else {
            burger_white.classList.remove('display');
            burger_black.classList.remove('display');
        }
    }
    // console.log(sections)

    function whiteOrBlackNavbarLink() {
        if (window.innerWidth > 450 && window.innerWidth < 800){
            if (window.pageYOffset >= backgrounds_clair[0].offsetTop + backgrounds_clair[0].parentNode.offsetTop &&
                window.pageYOffset <= backgrounds_clair[0].offsetTop + backgrounds_clair[0].parentNode.offsetTop + (backgrounds_clair[0].offsetHeight - 1) ){
                right_link.classList.add('black');
                left_link.classList.add('black');
            }  else if (window.pageYOffset >= backgrounds_clair[1].offsetTop + backgrounds_clair[1].parentNode.offsetTop &&
                window.pageYOffset <= backgrounds_clair[1].offsetTop + backgrounds_clair[1].parentNode.offsetTop + (backgrounds_clair[1].offsetHeight - 1) ){
                right_link.classList.add('black');
                left_link.classList.add('black');
            } else if (window.pageYOffset >= backgrounds_clair[2].offsetTop + backgrounds_clair[2].parentNode.offsetTop &&
                window.pageYOffset <= backgrounds_clair[2].offsetTop + backgrounds_clair[2].parentNode.offsetTop + (backgrounds_clair[2].offsetHeight - 1) ){
                right_link.classList.add('black');
                left_link.classList.add('black');
            } else {
                right_link.classList.remove('black');
                left_link.classList.remove('black');
            }
        }
        if (window.innerWidth > 800 && window.innerWidth < 1024 ){
            if (window.pageYOffset >= 0 && window.pageYOffset <= (sections[0].offsetHeight - 1) ){
                right_link.classList.remove('black');
                left_link.classList.remove('black');
            } else if (window.pageYOffset >= sections[1].offsetTop &&
                window.pageYOffset <= sections[1].offsetHeight + (sections[1].offsetTop - 1) ){
                right_link.classList.remove('black');
                left_link.classList.add('black');
            } else if (window.pageYOffset >= sections[2].offsetTop &&
                window.pageYOffset <= sections[2].offsetHeight + (sections[2].offsetTop - 1) ){
                right_link.classList.add('black');
                left_link.classList.remove('black');
            } else if (window.pageYOffset >= sections[4].offsetTop &&
                window.pageYOffset <= sections[4].offsetHeight + (sections[4].offsetTop - 1) ){
                right_link.classList.add('black');
                left_link.classList.add('black');
            } else {
                right_link.classList.remove('black');
                left_link.classList.remove('black');
            }
        }
    }

    function setMenuMobile() {
        if (window.innerWidth < 450 ){
            burger_black.addEventListener('click', function (event) {
                menu.classList.add('menu--toggle');
            })
            burger_white.addEventListener('click', function (event) {
                menu.classList.add('menu--toggle');
            })
            close_menu.addEventListener('click', function (event) {
                menu.classList.remove('menu--toggle');
            })

        }


    }

    function setNavigateLink() {
        if (window.innerWidth < 1024 ){
            accueil_link.addEventListener('click', function (event) {
                if (window.pageYOffset !== 0){
                    window.scrollTo(0,0);
                }
            })
            vins__link.addEventListener('click', function (event) {
                if (window.pageYOffset !== sections[1].offsetTop){
                    window.scrollTo(0,sections[1].offsetTop);
                }
            })
            domaine__link.addEventListener('click', function (event) {
                if (window.pageYOffset !== sections[3].offsetTop){
                    window.scrollTo(0,sections[3].offsetTop);
                }
            })
            contact__link.addEventListener('click', function (event) {
                if (window.pageYOffset !== sections[4].offsetTop){
                    window.scrollTo(0,sections[4].offsetTop);
                }
            })
        }
    }

    function isActivateLink() {
        if (window.innerWidth < 1024 ){
            if (window.pageYOffset >= 0 && window.pageYOffset <= sections[0].offsetHeight - 1 ){
                accueil_link.classList.add('active--link');
                vins__link.classList.remove('active--link');
                domaine__link.classList.remove('active--link');
                contact__link.classList.remove('active--link');
            } else if (window.pageYOffset >= sections[1].offsetTop &&
                window.pageYOffset <= sections[1].offsetHeight + sections[1].offsetTop - 1 ){
                accueil_link.classList.remove('active--link');
                vins__link.classList.add('active--link');
                domaine__link.classList.remove('active--link');
                contact__link.classList.remove('active--link');
            } else if (window.pageYOffset >= sections[3].offsetTop &&
                window.pageYOffset <= sections[3].offsetHeight + sections[3].offsetTop - 1 ){
                accueil_link.classList.remove('active--link');
                vins__link.classList.remove('active--link');
                domaine__link.classList.add('active--link');
                contact__link.classList.remove('active--link');
            } else if (window.pageYOffset >= sections[4].offsetTop &&
                window.pageYOffset <= sections[4].offsetHeight + sections[4].offsetTop - 1 ) {
                accueil_link.classList.remove('active--link');
                vins__link.classList.remove('active--link');
                domaine__link.classList.remove('active--link');
                contact__link.classList.add('active--link');
            }
        }
    }
})