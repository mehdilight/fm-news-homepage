
const navbarButton = document.querySelector('.navbar__button');

const navigation = (function(navbar) {
    const overlay = document.querySelector('.navbar__navigator__overlay');
    const closeButton = document.querySelector('.navbar__navigator__header__button');
    
    let isActive = false;
    
    const toggleOverlay = () => {
        overlay.classList.toggle('navbar__navigator__overlay--active');
    }

    const openNavigation = () => {
        isActive = true;
        navbar.classList.add('navbar__navigator--active');
    }


    const closeNavigation = () => {
        isActive = false;
        navbar.classList.remove('navbar__navigator--active');
    }

    overlay.addEventListener('click', function() {
        toggleOverlay();
        closeNavigation();
    });

    closeButton.addEventListener('click', function() {
        toggleOverlay();
        closeNavigation();
    });

    return {
        set active(value) {
            toggleOverlay();

            if (value) {
                openNavigation();
                return;
            }
            closeNavigation();
        },
        get active() {
            return isActive;
        },
        toggle() {
            this.active = !this.active;
        }
    };
})(document.querySelector('.navbar__navigator'));

navbarButton.addEventListener('click', function () {
    navigation.toggle();
});
