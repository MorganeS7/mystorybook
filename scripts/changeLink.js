function calcLeftPosition() {
    var leftLinks = document.getElementsByClassName('link left'),
        rightLinks = document.getElementsByClassName('link right'),
        width = (document.getElementsByClassName('book')[0].offsetWidth) * 2;
    
    width = (width < 380) ? width += 15 : width += 35;
    for (var i = 0; i < leftLinks.length; i++) {
        leftLinks[i].style.transform = "translateX(-" + width + "px)";
    }
    for (var i = 0; i < rightLinks.length; i++) {
        rightLinks[i].style.transform = 'none';
    }
}

function changeLinkSide(element) {
    if (element.classList.contains('right')) {
        element.classList.replace('right', 'left');
        calcLeftPosition();
    } else if (element.classList.contains('left')) {
        element.classList.replace('left', 'right');
        calcLeftPosition();
    }
}

function changeLinkToShowSide() {
    if (turningProcess.stepLinkToShow != 4 && turningProcess.stepLinkToShow != 0) {
        if (turningProcess.stepLinkToShow > turningProcess.stepLinkToHide && turningProcess.linkToShow.classList.contains('left')) {
            if (!turningProcess.linkTurned) {
                turningProcess.linkTurned = true;
                changeLinkSide(turningProcess.linkToShow);
            }
        } else if (turningProcess.stepLinkToShow < turningProcess.stepLinkToHide && turningProcess.linkToShow.classList.contains('right')) {
            if (!turningProcess.linkTurned) {
                turningProcess.linkTurned = true;
                changeLinkSide(turningProcess.linkToShow);
            }
        }
    }
}

function setLinksArray() {
    turningProcess['linksArray'] = [];
    var gap = Math.abs(turningProcess.stepLinkToHide - turningProcess.stepLinkToShow);
    
    if (gap > 1) {
        if (turningProcess.stepLinkToHide < turningProcess.stepLinkToShow) {
            for (var i = turningProcess.stepLinkToHide + 1; i < turningProcess.stepLinkToShow; i++) {
                var element = document.getElementById(turningProcess.steps[i]);
                if (element.classList.contains(turningProcess.side)) {
                    turningProcess.linksArray.push(element);
                }
            }
        } else {
            for (var i = turningProcess.stepLinkToShow + 1; i < turningProcess.stepLinkToHide; i++) {
                var element = document.getElementById(turningProcess.steps[i]);
                if (element.classList.contains(turningProcess.side)) {
                    turningProcess.linksArray.push(element);
                }
            }
        }
    }
}