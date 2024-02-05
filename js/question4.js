import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() : ""

let wickedCssClass = document.getElementById("wickedCssClass");
let result = document.getElementById("result");
let wickedCSSBtn = document.getElementById("wickedCSSBtn");
let randomCSSBtn = document.getElementById("randomCSSBtn");

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

for (let i = 0; i < animations.length; i++) {

    let option = document.createElement("option")
    option.value = animations[i];
    option.innerText = animations[i];
    wickedCssClass.appendChild(option);

}

wickedCssClass.addEventListener("click", () => {
    // if(wickedCssClass.value){
    //     result.classList = wickedCssClass.value + " simple-box pt-5";        
    // }
})

wickedCSSBtn.addEventListener("click", () => {
    if (wickedCssClass.value) {
        result.classList = wickedCssClass.value + " simple-box pt-5";
    }
})

randomCSSBtn.addEventListener("click", () => {
    let randNum = Math.floor(Math.random() * animations.length);

    result.classList = animations[randNum] + " simple-box pt-5";
    wickedCssClass.value = animations[randNum];
})