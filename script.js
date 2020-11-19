//CAMBIO ENTRE EL MENU-LEFT Y EL MENU-LEFT-SMALL
menuBurger = document.querySelector('.icon-menu-left-burger');
menuSmall = document.querySelector('.menu-left-small');
menuComplet = document.querySelector('.menu-left');
content = document.querySelector('.main-content');
menuBurger.addEventListener('click', change);

//DESPLIEGUE DE LOS MENÚS-RIGHT AND MORE
menuCrear = document.querySelector('.menu-crear');
menuApps = document.querySelector('.menu-apps');
menuNotifications = document.querySelector('.menu-notifications');
menuProfile = document.querySelector('.menu-profile');
menuMoreContent = document.querySelector('.menu-more-options-content');

iconCrear = document.querySelector('.icon-menu-righ.icon-video_call');
iconApps = document.querySelector('.icon-menu-righ.icon-stack');
iconNotifications = document.querySelector('.icon-menu-righ.icon-bell');
iconProfile = document.querySelector('.icon-menu-righ.image-profile');
iconMoreContent = document.querySelector('.more-options-content');

iconCrear.addEventListener('click', deploy1);
iconApps.addEventListener('click', deploy2);
iconNotifications.addEventListener('click', deploy3);
iconProfile.addEventListener('click', deploy4);
iconMoreContent.addEventListener('click', deploy5);

//BARRA DE BUSCAR
barraBuscar = document.querySelector('.search-bar');
cajaBuscar = document.querySelector('.box-search');
iconBuscar = document.querySelector('.icon-menu-righ.icon-search');
//header = document.querySelector('.header');

anchor = window.matchMedia('screen and (max-width: 656px)');
validation(anchor.matches);
anchor.addEventListener(validation);

function validation(event){
    if (anchor.matches){
        iconBuscar.addEventListener('click', show);
    }else{
        iconBuscar.removeEventListener('click', show);
    } 
}

function show(){
    if (barraBuscar.classList.contains('search-change')){
        cajaBuscar.classList.remove('search-change');
        barraBuscar.classList.remove('search-change');
        iconBuscar.classList.remove('search-change');
    }else{
        cajaBuscar.classList.add('search-change');
        barraBuscar.classList.add('search-change');
        iconBuscar.classList.add('search-change');
    }
}



function change(){
    if (menuSmall.classList.contains('change')){
        menuSmall.classList.remove('change');
        menuComplet.classList.remove('change');
        content.classList.remove('change');
    }else{
        menuSmall.classList.add('change');
        menuComplet.classList.add('change');
        content.classList.add('change');
    }
}

function deploy1(){
    deploy(1);
}
function deploy2(){
    deploy(2);
}
function deploy3(){
    deploy(3);
}
function deploy4(){
    deploy(4);
}
function deploy5(){
    deploy(5);
}

function deploy(menuType){
    if (menuType==1){
        menuApps.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        menuMoreContent.classList.remove('deploy');
        if (menuCrear.classList.contains('deploy')){
            menuCrear.classList.remove('deploy');
        }else{
            menuCrear.classList.add('deploy');
        }
    } else if (menuType==2){
        menuCrear.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        menuMoreContent.classList.remove('deploy');
        if (menuApps.classList.contains('deploy')){
            menuApps.classList.remove('deploy');
        }else{
            menuApps.classList.add('deploy');
        }
    } else if (menuType==3){
        menuCrear.classList.remove('deploy');
        menuApps.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        menuMoreContent.classList.remove('deploy');
        if (menuNotifications.classList.contains('deploy')){
            menuNotifications.classList.remove('deploy');
        }else{
            menuNotifications.classList.add('deploy');
        }
    } else if (menuType==4){
        menuCrear.classList.remove('deploy');
        menuApps.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        menuMoreContent.classList.remove('deploy');
        if (menuProfile.classList.contains('deploy')){
            menuProfile.classList.remove('deploy');
        }else{
            menuProfile.classList.add('deploy');
        }
        if (menuProfile.classList.contains('deploy')){
            menuProfile.classList.remove('deploy');
        }else{
            menuProfile.classList.add('deploy');
        }
    } else {
        menuCrear.classList.remove('deploy');
        menuApps.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        if (menuMoreContent.classList.contains('deploy')){
            menuMoreContent.classList.remove('deploy');
        }else{
            menuMoreContent.classList.add('deploy');
        }
    }
}