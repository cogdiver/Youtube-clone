//CAMBIO ENTRE EL MENU-LEFT Y EL MENU-LEFT-SMALL
menuBurger = document.querySelector('.icon-menu-left-burger');
menuComplet = document.querySelector('.menu-left');
menuSmall = document.querySelector('.menu-left-small');
content = document.querySelector('.main-content');
menuBurger.addEventListener('click', changeMenuComplet);

anchorForMenus = window.matchMedia('screen and (min-width: 768px)')
validationForMenus()
anchorForMenus.addEventListener('change', validationForMenus)

anchorForContent = window.matchMedia('screen and (min-width: 1400px)')
validationForContent()
anchorForContent.addEventListener('change', validationForContent)

function changeMenuComplet(){
    menuComplet.classList.toggle('hidden')
    if(anchorForMenus.matches){
        menuSmall.classList.toggle('hidden')
    }
    if(anchorForContent.matches){
        content.classList.toggle('marginLeftLarge')
    }
}

function validationForMenus(){
    if(anchorForMenus.matches){
        if(menuComplet.classList.contains('hidden')){
            menuSmall.classList.remove('hidden')
        }else{
            menuSmall.classList.add('hidden')
        }
    }else{
        menuSmall.classList.add('hidden')
    }
}

function validationForContent(){
    if(anchorForContent.matches){
        if(menuComplet.classList.contains('hidden')){
            content.classList.remove('marginLeftLarge')
        }else{
            content.classList.add('marginLeftLarge')
        }
    }else{
        content.classList.remove('marginLeftLarge')
        menuComplet.classList.add('hidden')
        menuSmall.classList.remove('hidden')
    }
    
}

//***************************** DESPLIEGUE DE LOS MENÚS-RIGHT AND MORE
menuCrear = document.querySelector('.menu-crear');
menuApps = document.querySelector('.menu-apps');
menuNotifications = document.querySelector('.menu-notifications');
menuProfile = document.querySelector('.menu-profile');

iconCrear = document.querySelector('.icon-menu-righ.icon-video_call');
iconApps = document.querySelector('.icon-menu-righ.icon-stack');
iconNotifications = document.querySelector('.icon-menu-righ.icon-bell');
iconProfile = document.querySelector('.icon-menu-righ.image-profile');

iconCrear.addEventListener('click', deploy1);
iconApps.addEventListener('click', deploy2);
iconNotifications.addEventListener('click', deploy3);
iconProfile.addEventListener('click', deploy4);

function deploy1(){
    deployMenusRight(1);
}
function deploy2(){
    deployMenusRight(2);
}
function deploy3(){
    deployMenusRight(3);
}
function deploy4(){
    deployMenusRight(4);
}

function deployMenusRight(menuType){
    removeMenusMoreContent()
    switch (menuType) {
        case 1:
            menuCrear.classList.toggle('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
        case 2:
            menuApps.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
        case 3:
            menuNotifications.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
        case 4:
            menuProfile.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            break;
    }
}

function removeMenusRight(){
    menuCrear.classList.add('hidden');
    menuApps.classList.add('hidden');
    menuNotifications.classList.add('hidden');
    menuProfile.classList.add('hidden');
}

//********************************************** BARRA DE BUSCAR
barraBuscar = document.querySelector('.search-bar');
iconBuscar = document.querySelector('.icon-menu-righ.icon-search');
iconBack = document.querySelector('.iconBack');

anchorForSearch = window.matchMedia('screen and (min-width: 600px)');
validation();
anchorForSearch.addEventListener('change',validation);

function validation(){
    if (anchorForSearch.matches){
        iconBuscar.removeEventListener('click', changeSearchBar);
        barraBuscar.classList.remove('hidden');
    }else{
        iconBuscar.addEventListener('click', changeSearchBar);
        barraBuscar.classList.add('hidden');
    } 
}

function changeSearchBar(){
    if (barraBuscar.classList.contains('hidden')){
        iconBuscar.removeEventListener('click', changeSearchBar);
        iconBack.addEventListener('click', changeSearchBar);
    }else{
        iconBuscar.addEventListener('click', changeSearchBar);
        iconBack.removeEventListener('click', changeSearchBar);
    }
    barraBuscar.classList.toggle('hidden');
}


//********************************************** MORE OPCTION
menusMoreContent = document.querySelectorAll('.menu-more-options-content')
iconMoreContent = document.querySelectorAll('.more-options-content')

iconMoreContent.forEach((icon, i) => {
    icon.addEventListener('click', ()=>deployMenuMoreContent(i))
});

containers1 = window.matchMedia('screen and (max-width: 576px)')
containers1.addEventListener('change', container1)
container1()

containers2 = window.matchMedia('screen and (min-width: 576px)')
containers2.addEventListener('change', container2)
container2()

containers3 = window.matchMedia('screen and (min-width: 992px)')
containers3.addEventListener('change', container3)
container3()

containers4 = window.matchMedia('screen and (min-width: 1200px)')
containers4.addEventListener('change', container4)
container4()

function container1(){
    if (containers1.matches) {
        assignClassFinish(1)
    }
}
function container2(){
    if(containers2.matches){
        assignClassFinish(2)
    }
}
function container3(){
    if (containers3.matches) {
        assignClassFinish(3)
    }
}
function container4(){
    if (containers4.matches) {
        assignClassFinish(4)
    }
}

function assignClassFinish(containers){
    //debugger
    if (containers===1) {
        menusMoreContent.forEach(container => {
            container.classList.add('finish');
        });
    }else{
        menusMoreContent.forEach(container => {
            container.classList.remove('finish');
        });
        for (let i = containers-1; i < menusMoreContent.length; i+=containers) {
            menusMoreContent[i].classList.add('finish');
        }
    }
}

function deployMenuMoreContent(i){
    removeMenusRight()
    if (menusMoreContent[i].classList.contains('deploy')) {
        removeMenusMoreContent()
    }else{
        removeMenusMoreContent()
        menusMoreContent[i].classList.add('deploy');
    }
}

function removeMenusMoreContent() {
    menusMoreContent.forEach(menu => {
        menu.classList.remove('deploy');
    });
}


//********************************************** MORE OPCTION NOTIFICATION
menusMoreNotifi = document.querySelectorAll('.menu-more-options-notification')
iconMoreNotifi = document.querySelectorAll('.more-options-notification')

iconMoreNotifi.forEach((iconN, j) => {
    iconN.addEventListener('click', ()=>{
        debugger
        console.log(j);
        if (menusMoreNotifi[j].classList.contains('deploy')){
            removeMenusMoreNotifi();
        }else{
            removeMenusMoreNotifi();
            menusMoreNotifi[j].classList.add('deploy');
        }
    })
});

function removeMenusMoreNotifi() {
    debugger
    menusMoreNotifi.forEach(menu => {
        menu.classList.remove('deploy');
    });
}