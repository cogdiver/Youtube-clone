menu = document.querySelector('.icon-menu-left-burger');
menu1 = document.querySelector('.menu-left-small');
menu2 = document.querySelector('.menu-left');
menu.addEventListener('click', change);

function change(){
    if (menu1.classList.contains('change')){
        menu1.classList.remove('change');
        menu2.classList.remove('change');
    }else{
        menu1.classList.add('change');
        menu2.classList.add('change');
        
    }
}

