//each function imports the following few lines to check to see if dark or light mode should be applied
import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() :  ""

//Initialize elements
let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");

//Add event listeners
btnDark.addEventListener("click", () => {

    //grab the stored mode
    let mode = localStorage.getItem('mode');

    //sometimes no mode is stored so we have to check that    
    if (!mode) {
        localStorage.setItem("mode", "light")
        mode = localStorage.getItem('mode');
    }

    // if the mode is the opposite of what we want to set it to then we will run our functions to change to dark/light mode
    if (mode == "light") {
        localStorage.setItem("mode", "dark")        
        turnDark();
    }


})

btnLight.addEventListener("click", () => {

    //grab the stored mode
    let mode = localStorage.getItem('mode');

    //sometimes no mode is stored so we have to check that    
    if (!mode) {
        localStorage.setItem("mode", "dark")
        mode = localStorage.getItem('mode');
    }

    // if the mode is the opposite of what we want to set it to then we will run our functions to change to dark/light mode
    if (mode == "dark") {
        localStorage.setItem("mode", "light");        
        turnLight();
    }


})




