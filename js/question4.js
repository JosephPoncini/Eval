//dark/light modes applied. see dashboard/question 3 for me details
import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() : ""

//Initialize elements
let wickedCssClass = document.getElementById("wickedCssClass");
let result = document.getElementById("result");
let wickedCSSBtn = document.getElementById("wickedCSSBtn");
let randomCSSBtn = document.getElementById("randomCSSBtn");

//created an array of the possible animations. Important that the array names match the class names we want to add.
let animations = [
    "barrelRoll",
    "fadeIn",
    "floater",
    "heartbeat",
    "pulse",
    "rollerLeft",
    "rollerRight",
    "rotateIn",
    "rotateInLeft",
    "rotateInRight",
    "rotation",
    "shake",
    "sideToSide",
    "slideDown",
    "slideLeft",
    "slideRight",
    "slideUp",
    "spinner",
    "wiggle",
    "zoomer",
    "zoomerOut"
];

//I was lazy and wanted to create the option elements in javascript instead of copying and pasting. The options have values equivalent to the wickedCSSclass I would select to ad
for (let i = 0; i < animations.length; i++) {

    let option = document.createElement("option")
    option.value = animations[i];
    option.innerText = animations[i];
    wickedCssClass.appendChild(option);

}

//Originally I had the selector change the animation immediately but that made the wickedCSSbtn sort of useless
wickedCssClass.addEventListener("click", () => {
    // if(wickedCssClass.value){
    //     result.classList = wickedCssClass.value + " simple-box pt-5";        
    // }
})

//The class of result is changed to the value of the option when this button is clicked 
wickedCSSBtn.addEventListener("click", () => {
    if (wickedCssClass.value) {
        result.classList = wickedCssClass.value + " simple-box pt-5";
    }
})

//The class of result is changed to a random option when this button is clicked 
randomCSSBtn.addEventListener("click", () => {
    let randNum = Math.floor(Math.random() * animations.length);

    result.classList = animations[randNum] + " simple-box pt-5";
    wickedCssClass.value = animations[randNum];
})