let menu = document.getElementsByClassName("menu")
function botaoBars(){
    for(let i = 0; i < menu.length;i++){
        menu[i].style.display="block"
    }
}

function botaoClose(){
    for(let i = 0; i < menu.length;i++){
        menu[i].style.display="none"
    }
}