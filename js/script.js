
//***************************** CAMBIO ENTRE EL MENU-LEFT Y EL MENU-LEFT-SMALL

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

function removeMenusMoreNotifi() {
    debugger
    menusMoreNotifi.forEach(menu => {
        menu.classList.remove('deploy');
    });
}

