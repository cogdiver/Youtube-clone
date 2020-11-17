menuBurger = document.querySelector('.icon-menu-left-burger');
menuSmall = document.querySelector('.menu-left-small');
menuComplet = document.querySelector('.menu-left');
content = document.querySelector('.main-content');
menuBurger.addEventListener('click', change);

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

function deploy(menuType){
    if (menuType==1){
        menuApps.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        if (menuCrear.classList.contains('deploy')){
            menuCrear.classList.remove('deploy');
        }else{
            menuCrear.classList.add('deploy');
        }
    } else if (menuType==2){
        menuCrear.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        if (menuApps.classList.contains('deploy')){
            menuApps.classList.remove('deploy');
        }else{
            menuApps.classList.add('deploy');
        }
    } else if (menuType==3){
        menuCrear.classList.remove('deploy');
        menuApps.classList.remove('deploy');
        menuProfile.classList.remove('deploy');
        if (menuNotifications.classList.contains('deploy')){
            menuNotifications.classList.remove('deploy');
        }else{
            menuNotifications.classList.add('deploy');
        }
    } else {
        menuCrear.classList.remove('deploy');
        menuApps.classList.remove('deploy');
        menuNotifications.classList.remove('deploy');
        if (menuProfile.classList.contains('deploy')){
            menuProfile.classList.remove('deploy');
        }else{
            menuProfile.classList.add('deploy');
        }
    }
}