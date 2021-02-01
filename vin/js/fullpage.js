window.addEventListener('load', function () {

    if ( window.innerWidth > 1024 ){

        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';

        const sections = document.querySelectorAll('section');
        const fullpage = document.getElementById('fullpage');
        const left_link = document.getElementById('left__link');
        const right_link = document.getElementById('right__link');
        const accueil_link = document.getElementById('accueil__link');
        const vins__link = document.getElementById('vins__link');
        const domaine__link = document.getElementById('domaine__link');
        const contact__link = document.getElementById('contact__link');
        let spin_value = 0;
        let can_scroll = true;

        whiteOrBlackNavbarLinkDesktop();
        setNavigateLinkDeskTop();

        window.addEventListener('mousewheel', function (event) {
            if (can_scroll) {

                can_scroll = false;

                if (event.deltaY > 0 ){
                    if (spin_value < sections.length -1 ) {
                        spin_value += 1;
                    }
                } else {
                    if (spin_value > 0 ) {
                        spin_value -= 1;
                    }
                }
                scroll_content(spin_value);
            }

            setTimeout( function () {
                can_scroll = true;
            }, 600);
            console.log(spin_value)

            whiteOrBlackNavbarLinkDesktop();
        });

        function scroll_content( count ) {
            fullpage.setAttribute('style',
            '-webkit-transform: translateY(-'+ count * 100 +'vh);' +
                    '-ms-transform: translateY(-'+ count * 100 +'vh);' +
                    '-o-transform: translateY(-'+ count * 100 +'vh);' +
                    'transform: translateY(-'+ count * 100 +'vh);'
            );
        }

        function whiteOrBlackNavbarLinkDesktop() {
            if (window.innerWidth > 1024 ){
                switch (spin_value) {
                    case 0 :
                        right_link.classList.remove('black');
                        left_link.classList.remove('black');
                        accueil_link.classList.add('active--link');
                        vins__link.classList.remove('active--link');
                        domaine__link.classList.remove('active--link');
                        contact__link.classList.remove('active--link');
                        return
                    case 1 :
                        right_link.classList.remove('black');
                        left_link.classList.add('black');
                        accueil_link.classList.remove('active--link');
                        vins__link.classList.add('active--link');
                        domaine__link.classList.remove('active--link');
                        contact__link.classList.remove('active--link');
                        return
                    case 2 :
                        right_link.classList.add('black');
                        left_link.classList.remove('black');
                        accueil_link.classList.remove('active--link');
                        vins__link.classList.add('active--link');
                        domaine__link.classList.remove('active--link');
                        contact__link.classList.remove('active--link');
                        return
                    case 3 :
                        right_link.classList.remove('black');
                        left_link.classList.remove('black');
                        accueil_link.classList.remove('active--link');
                        vins__link.classList.remove('active--link');
                        domaine__link.classList.add('active--link');
                        contact__link.classList.remove('active--link');
                        return
                    case 4 :
                        right_link.classList.add('black');
                        left_link.classList.add('black');
                        accueil_link.classList.remove('active--link');
                        vins__link.classList.remove('active--link');
                        domaine__link.classList.remove('active--link');
                        contact__link.classList.add('active--link');
                        return
                }
            }
        }

        function setNavigateLinkDeskTop() {
            if (window.innerWidth > 1024 ){
                accueil_link.addEventListener('click', function (event) {
                    spin_value = 0;
                    scroll_content(spin_value);
                    whiteOrBlackNavbarLinkDesktop();
                })
                vins__link.addEventListener('click', function (event) {
                    spin_value = 1;
                    scroll_content(spin_value);
                    whiteOrBlackNavbarLinkDesktop();
                })
                domaine__link.addEventListener('click', function (event) {
                    spin_value = 3;
                    scroll_content(spin_value);
                    whiteOrBlackNavbarLinkDesktop();
                })
                contact__link.addEventListener('click', function (event) {
                    spin_value = 4;
                    scroll_content(spin_value);
                    whiteOrBlackNavbarLinkDesktop();
                })
            }
        }
    }

});