let widthScreen = 541
console.log(window.innerWidth);

const header = document.querySelector('#close');
const nav = document.querySelector('nav');

function menu(){
    if(window.innerWidth < widthScreen){
        header.classList.add("bx", "bx-menu");
    }
}

window.addEventListener("load", menu());
window.addEventListener("resize", menu());

header.addEventListener("click", function() {
    nav.classList.toggle("open");
});