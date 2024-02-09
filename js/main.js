let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let menuSitio = document.querySelector("#menu-sitio");
let menuItem = document.querySelectorAll(".menu-item")

openMenu.addEventListener("click", () => {
    menuSitio.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    menuSitio.classList.remove("active");
})

menuItem.forEach(menuItem =>{
    menuItem.addEventListener("click", () =>{
        menuSitio.classList.remove("active");
    })
} )