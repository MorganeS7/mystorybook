function removePage() {
    var element = document.getElementsByClassName('is-rotated-' + turningProcess.side)[0];
    if (element) {
        element.classList.replace('is-rotated-' + turningProcess.side, 'invisible');
        
        // Fermeture de la cover
        if (element.classList.contains('cover')) {
            element.classList.remove('cover');
        }
        
        // Ouverture de la cover
        if (turningProcess.linkToHide.id == 'home') {
            setTimeout(function() {
                document.getElementsByClassName('bookRight')[0].classList.remove('bookRight--is-animated-to-left');
                document.getElementsByClassName('bookLeft')[0].classList.replace('bookLeft--is-invisible', 'bookLeft--undisplayed');
            }, 1000);
        }
    }
}

function createPage(pageCreatedEvent) {
    var pageSide = turningProcess.side == 'right' ? 'Right' : 'Left',
        pageClass = 'page' + pageSide;
    
    // Si c'est l'ouverture du livre / If we open the book
    if (document.getElementsByClassName('bookLeft--undisplayed')[0] && turningProcess.linkToHide.id != 'home') {
        document.getElementsByClassName('bookRight')[0].classList.add('bookRight--is-animated-to-right');
        document.getElementsByClassName('bookRight')[0].classList.remove('cover');
    }
    
    // Si aucune page n'a déjà été créée / If there's no page created before    
    if (!document.getElementsByClassName(pageClass)[0]) {
        var page = document.createElement('div');
        page.className = "page " + pageClass;
        if (turningProcess.linkToShow.id == 'home') {
            page.className += ' cover';
        }
        page.id = "pageCreated";
        document.getElementsByClassName('book' + pageSide)[0].appendChild(page);
    
    // Sinon on fait apparaître la page / The page is appearing    
    } else if (document.getElementsByClassName('invisible')[0]) {
        var page = document.getElementsByClassName(pageClass)[0];
        page.classList.remove('invisible');
        
        // Remet la couverture au moment de la fermeture du livre / The cover svg is added when the book is closed
        if (turningProcess.linkToShow.id == 'home') {
            page.className += ' cover';
        }
        
        page.id = "pageCreated";
    }
    
    document.dispatchEvent(pageCreatedEvent);
}

function turnPage(pageTurnedEvent) {
    if (document.getElementById('pageCreated')) {
        var pageToTurn = document.getElementById('pageCreated');
        pageToTurn.classList.add('is-rotated-' + turningProcess.side);
        pageToTurn.id = '';
    
        if (turningProcess.linkToHide.id == 'home') {
            document.getElementsByClassName('bookLeft')[0].classList.add('bookLeft--is-invisible');
            
            setTimeout(function() {
                pageToTurn.className += ' cover';
            }, 1000);
        }
    }
    
    setTimeout(function() {
        removePage();
        document.dispatchEvent(pageTurnedEvent);
    }, 2000);
}