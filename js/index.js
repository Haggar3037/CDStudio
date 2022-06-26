let topBar = document.querySelector(".top-bar");
let header = document.querySelector(".header");
let buttons = document.querySelectorAll(".top-bar__menu__element");
let linkLists = document.querySelectorAll(".top-bar__menu-link-list")

window.addEventListener('scroll', () => {
    let scrollDistanse = window.scrollY;
    let backgroundValue;
    let activChek = 0;

    if (scrollDistanse < 500) {
        let backgroundOpacity = (scrollDistanse/500).toFixed(2);
        backgroundValue = "linear-gradient(rgba(255, 255, 255," + backgroundOpacity + "), rgba(255, 255, 255," + backgroundOpacity + ")), url(../img/header.png)"
        header.style.backgroundImage = backgroundValue;
    }

    if (scrollDistanse >= 200) {
        topBar.classList.add("top-bar_activ");
    }

    if (scrollDistanse < 200) {
        for(i = 0; i < buttons.length; i++) {
            if(buttons[i].classList.contains("top-bar__menu__element_activ")) {
                activChek = 1;
            }
        }
        if(activChek == 0) {
            topBar.classList.remove("top-bar_activ");
        }
    }
})

document.addEventListener("DOMContentLoaded", () => {
    let scrollDistanse = window.scrollY;
    if (scrollDistanse >= 20) {
        topBar.classList.add("top-bar_activ");
    }
});

for (i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", menuEvent);
}


function menuEvent(event) {
    console.log(event);
    let button = event.currentTarget; 
    let scrollDistanse = window.scrollY;
    let activChek = 0;
    for (i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains("top-bar__menu__element_activ")) {
            buttons[i].classList.remove("top-bar__menu__element_activ");
            linkLists[i].classList.remove("top-bar__menu-link-list_activ");
            if(buttons[i] == button){
                activChek = 1;
            }   
        }
    }
    if(activChek == 0) {
        for (i = 0; i < buttons.length; i++){
            if(buttons[i] == button){
                buttons[i].classList.add("top-bar__menu__element_activ");
                linkLists[i].classList.add("top-bar__menu-link-list_activ");
            }
        }
        topBar.classList.add("top-bar_activ");
    } else if (scrollDistanse < 20){
        topBar.classList.remove("top-bar_activ");
    }
}

