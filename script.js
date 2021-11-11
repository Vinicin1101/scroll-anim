const cards = Array.from(document.getElementsByClassName('card'));

function isOnScreen(el) {
    let rect = el.getBoundingClientRect()
    console.log(rect.height)
    return rect.top > (0 - rect.height) && rect.bottom < (window.innerHeight + rect.height);
}

function playAnimation(el) {
    if(isOnScreen(el)){
        el.setAttribute('class', 'card visible')
    }else{
        el.setAttribute('class', 'card invisible')
    }
}

function render() {
    for(let i = 0; i < cards.length; i++) {
        playAnimation(cards[i]);
    }
}
render();

window.addEventListener('scroll', render);