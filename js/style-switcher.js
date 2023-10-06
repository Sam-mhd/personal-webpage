const styleSwitcherToggle = document.querySelector('.style-switcher-toggler')
styleSwitcherToggle.addEventListener('click', function () {
    document.querySelector('.style-switcher').classList.toggle('open')
})
window.addEventListener('scroll', function () {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})


function setActiveStyle(styleName) {
    const styleLinks = document.querySelectorAll('.alternate-style');
    styleLinks.forEach(link => {
        if (link.getAttribute('title') === styleName) {
            link.removeAttribute('disabled');
        } else {
            link.setAttribute('disabled', 'true');
        }
    });
}

// dark and light theme/
const dayNight = document.querySelector('.day-night')
dayNight.addEventListener('click',function (){
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark')

})
window.addEventListener('load', function () {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun')
    } else {
        dayNight.querySelector('i').classList.add('fa-moon')

    }
})
