var menu = document.querySelector('.content-list');
var current;

function active(elem){
    elem.classList.add('item-bg');
    current = elem;
}

function inactive(elem){
    elem.classList.remove('item-bg');
}

function clickHandler(e){
    if(current){
        inactive(current);
    }
    active(e.target)
}

menu.addEventListener('click',clickHandler);
active(document.querySelectorAll('.item')[0]);