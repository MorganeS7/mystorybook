function globalTurningPageFunction(e) {
    var target = e.target;
    
    // Si la target n'est pas bonne / If the target is a svg or a path
    while (target.id == '') {
        target = target.parentElement;
        console.log(target);
    }
    
    turningProcess = {};
    turningProcess['linkToHide'] = target;
    turningProcess['linkToShow'] = document.getElementsByClassName('link invisible')[0];
    turningProcess['side'] = document.getElementById(turningProcess.linkToHide.id).classList.contains('right') ? 'right' : 'left';
    turningProcess['uiBlocked'] = true;
    turningProcess['steps'] = ['home', 'cinderella', 'sleepingbeauty', 'bluebeard', 'pussinboots'];
    turningProcess['stepLinkToHide'] = turningProcess.steps.indexOf(turningProcess.linkToHide.id);
    turningProcess['stepLinkToShow'] = turningProcess.steps.indexOf(turningProcess.linkToShow.id);
    turningProcess['linkTurned'] = false;

    var pageCreatedEvent = document.createEvent('Event'),
        pageTurnedEvent = document.createEvent('Event'),
        contentHiddenEvent = document.createEvent('Event'),
        contentShownEvent = document.createEvent('Event');

    pageCreatedEvent.initEvent('pageCreated', false, true);
    pageTurnedEvent.initEvent('pageTurned', false, true);
    contentHiddenEvent.initEvent('contentHidden', false, true);
    contentShownEvent.initEvent('contentShowed', false, true);
    
    document.addEventListener('contentShowed', function() {
        turningProcess['uiBlocked'] = false;
    });
    
    document.addEventListener('pageTurned', function() {
        showContent(contentShownEvent);
    });
    
    document.addEventListener('contentHidden', function() {
        turnPage(pageTurnedEvent);
    });
    
    document.addEventListener('pageCreated', function() {
        hidePreviousContent(contentHiddenEvent);
    });
    
    createPage(pageCreatedEvent);
}