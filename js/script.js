//CAMBIO ENTRE EL MENU-LEFT Y EL MENU-LEFT-SMALL
menuBurger = document.querySelector('.icon-menu-left-burger');
menuComplet = document.querySelector('.menu-left');
menuBurger.addEventListener('click', changeMenuComplet);

//añadir mediaquery para menu-left-small
//menuSmall = document.querySelector('.menu-left-small');
//content = document.querySelector('.main-content');

function changeMenuComplet(){
    menuComplet.classList.toggle('hidden')
}


//DESPLIEGUE DE LOS MENÚS-RIGHT AND MORE
menuCrear = document.querySelector('.menu-crear');
menuApps = document.querySelector('.menu-apps');
menuNotifications = document.querySelector('.menu-notifications');
menuProfile = document.querySelector('.menu-profile');
//menuMoreContent = document.querySelector('.menu-more-options-content');

iconCrear = document.querySelector('.icon-menu-righ.icon-video_call');
iconApps = document.querySelector('.icon-menu-righ.icon-stack');
iconNotifications = document.querySelector('.icon-menu-righ.icon-bell');
iconProfile = document.querySelector('.icon-menu-righ.image-profile');
//iconMoreContent = document.querySelector('.more-options-content');

iconCrear.addEventListener('click', deploy1);
iconApps.addEventListener('click', deploy2);
iconNotifications.addEventListener('click', deploy3);
iconProfile.addEventListener('click', deploy4);
//iconMoreContent.addEventListener('click', deploy5);

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
/*function deploy5(){
    deploy(5);
}*/

function deploy(menuType){
    switch (menuType) {
        case 1:
            menuCrear.classList.toggle('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('deploy');
            //menuMoreContent.classList.add('hidden');
            break;
        case 2:
            menuApps.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('hidden');
            //menuMoreContent.classList.add('hidden');
            break;
        case 3:
            menuNotifications.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuProfile.classList.add('hidden');
            //menuMoreContent.classList.add('hidden');
            break;
        case 4:
            menuProfile.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            //menuMoreContent.classList.add('hidden');
            break;
        default:
            //menuMoreContent.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
    }
}