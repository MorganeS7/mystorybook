window.addEventListener("load", function(event) {
    document.getElementsByClassName('loading__overlay')[0].classList.add('loading__overlay--is-hidden');
});

var turningProcess = {};
document.addEventListener('DOMContentLoaded', function() {
    calcLeftPosition();
    
    window.addEventListener('resize', function() {
        calcLeftPosition();
    });
    
    var navLinks = document.getElementsByClassName('link'),
        svgNav = document.getElementsByClassName('svg-nav-icons');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            if (!turningProcess.uiBlocked) {
                globalTurningPageFunction(e);
            }
        });
    }
    
    for (var i = 0; i < svgNav.length; i++) {
        svgNav[i].addEventListener('click', function(e) {
            if (!turningProcess.uiBlocked) {
                globalTurningPageFunction(e);
            }
        });
    }
    
});