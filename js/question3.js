import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() :  ""


let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");


btnDark.addEventListener("click", () => {

    let mode = localStorage.getItem('mode');

    if (!mode) {
        localStorage.setItem("mode", "light")
        mode = localStorage.getItem('mode');
    }


    if (mode == "light") {
        localStorage.setItem("mode", "dark")        
        turnDark();
    }


})

btnLight.addEventListener("click", () => {

    let mode = localStorage.getItem('mode');

    if (!mode) {
        localStorage.setItem("mode", "dark")
        mode = localStorage.getItem('mode');
    }


    if (mode == "dark") {
        localStorage.setItem("mode", "light");        
        turnLight();
    }


})




