function hidePreviousContent(contentHiddenEvent) {
    
    var contentToHide = document.getElementsByClassName(turningProcess.linkToShow.id + 'Content');
    
    for (var i = 0; i < contentToHide.length; i++) {
        if (contentToHide[i].classList.contains('visible')) {
            contentToHide[i].classList.replace('visible', 'is-disappearing');
        }
    }
    
    turningProcess.linkToHide.classList.add('link-is-disappearing');
    setLinksArray();
    for (var j = 0; j < turningProcess.linksArray.length; j++) {
        turningProcess.linksArray[j].classList.add('link-is-disappearing');
    }
    
    setTimeout(function() {
        var contentToHide = document.getElementsByClassName('is-disappearing');
        for (var i = 0; i < contentToHide.length; i++) {
            contentToHide[i].classList.replace('is-disappearing', 'hidden');
        }
        
        turningProcess.linkToHide.classList.replace('link-is-disappearing', 'invisible');
        changeLinkToShowSide();
        
        setTimeout(function() {
            for (var j = 0; j < turningProcess.linksArray.length; j++) {
                var element = turningProcess.linksArray[j];
                if (element.classList.contains(turningProcess.side)) {
                    changeLinkSide(element);
                }
            }
        }, 1200);
        
        document.dispatchEvent(contentHiddenEvent);
    }, 1200);
}

function showContent(contentShownEvent) {
    
    // Fermeture de la cover
    if (document.getElementsByClassName('bookLeft--undisplayed')[0] && turningProcess.linkToHide.id != 'home') {
        document.getElementsByClassName('bookRight')[0].classList.remove('bookRight--is-animated-to-right');
        document.getElementsByClassName('bookLeft')[0].classList.remove('bookLeft--undisplayed');
        calcLeftPosition();
    }
    
    // Ouverture de la cover
    if (turningProcess.linkToHide.id == 'home') {
        document.getElementsByClassName('bookRight')[0].classList.add('bookRight--is-animated-to-left');
        document.getElementsByClassName('bookRight')[0].classList.add('cover');
        //document.getElementsByClassName('bookRight')[0].classList.remove('bookRight--is-animated-to-left');
        //document.getElementsByClassName('bookLeft')[0].classList.add('bookLeft--is-invisible');
        calcLeftPosition();
    }
    
    var contentId = turningProcess.linkToHide.id + 'Content',
        contentToShow = document.getElementsByClassName(contentId);
    
    turningProcess.linkToShow.classList.replace('invisible', 'link-is-appearing');
    
    for (var j = 0; j < turningProcess.linksArray.length; j++) {
        turningProcess.linksArray[j].classList.replace('link-is-disappearing', 'link-is-appearing');
    }
    
    for (var i = 0; i < contentToShow.length; i++) {
        contentToShow[i].classList.replace('hidden', 'is-appearing');
    }
    
    setTimeout(function() {
        for (var j = 0; j < contentToShow.length; j++) {
            contentToShow[j].classList.replace('is-appearing', 'visible');
        }
        turningProcess.linkToShow.classList.remove('link-is-appearing');
        
        for (var j = 0; j < turningProcess.linksArray.length; j++) {
            turningProcess.linksArray[j].classList.remove('link-is-appearing');
        }
        
        document.dispatchEvent(contentShownEvent);
    }, 1500);
}