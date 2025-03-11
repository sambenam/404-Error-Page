const containerEl = document.querySelector('#container');

window.onmousemove = function(event){
    let x = event.clientX / 6;
    let y = event.clientY / 6;

    containerEl.style.backgroundPositionX = x + "px";
    containerEl.style.backgroundPositionY = y + "px";
}