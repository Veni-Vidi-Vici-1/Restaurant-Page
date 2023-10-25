import { home } from "./src/home.js"
import { menu } from "./src/menu.js"
import { contact } from "./src/contact.js"
 
// Another Pages
let homeHTML = home()
let menuHTML = menu()
let contactHTML = contact()

// H2 elements to switch pages
const homeel = document.querySelector(".home")
homeel.addEventListener("click",(e) => switchPath(e))
const menuel = document.querySelector(".menu")
menuel.addEventListener("click",(e) => switchPath(e))
const contactel = document.querySelector(".contact")
contactel.addEventListener("click",(e) => switchPath(e))

const main = document.querySelector("main")
var chosen = "home"

function switchPath(e) {

let tappedel = e.target.innerHTML

if (tappedel === "Home") {

chosen = "home"
homeel.style.color = "white"
menuel.style.color = "black"
contactel.style.color = "black"
choosePath()

} else if (tappedel === "Menu") {

homeel.style.color = "black"
menuel.style.color = "white"
contactel.style.color = "black"

chosen = "menu"
choosePath()

} else if (tappedel === "Contact us") {

homeel.style.color = "black"
menuel.style.color = "black"
contactel.style.color = "white"

chosen = "contact"
choosePath()

}

}

function choosePath() {

if (chosen === "home") {

main.innerHTML = homeHTML

} else if (chosen === "menu") {

main.innerHTML = menuHTML
main.style.backgroundColor = "white"
main.style.backgroundImage = "none"

} else if (chosen === "contact") {

main.innerHTML = contactHTML

}
 
}

document.addEventListener("DOMContentLoaded",choosePath())