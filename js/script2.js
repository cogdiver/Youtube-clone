//***************************** CAMBIO ENTRE EL MENU-LEFT Y EL MENU-LEFT-SMALL
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


//********************************************** BARRA DE BUSCAR
barraBuscar = document.querySelector('.search-bar');
iconBuscar = document.querySelector('.icon-menu-righ.icon-search');
iconBack = document.querySelector('.iconBack');

anchorForSearch = window.matchMedia('screen and (min-width: 600px)');
validation();
anchorForSearch.addEventListener('change',validation);


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


//********************************************** MORE OPCTION NOTIFICATION
menusMoreNotifi = document.querySelectorAll('.menu-more-options-notification')
iconMoreNotifi = document.querySelectorAll('.more-options-notification')

iconMoreNotifi.forEach((iconN, j) => {
    iconN.addEventListener('click', ()=>{
        console.log(j);
        if (menusMoreNotifi[j].classList.contains('deploy')){
            removeMenusMoreNotifi();
        }else{
            removeMenusMoreNotifi();
            menusMoreNotifi[j].classList.add('deploy');
        }
    })
});