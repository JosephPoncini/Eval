

const turnDark = () => {
    let mode = localStorage.getItem('mode');
    if (mode == "dark") {
        console.log("btn working");
        let x = document.querySelector(".lightGreyBg");
        x.classList.remove("lightGreyBg");
        x.classList.add("greyBg");

        let y = document.querySelector(".bg-light");
        y.classList.remove("navbar-light");
        y.classList.add("navbar-dark");
        y.classList.remove("bg-light");
        y.classList.add("bg-dark");
    }


}

const turnLight = () => {
    let mode = localStorage.getItem('mode');
    if (mode == "light") {
        let x = document.querySelector(".greyBg");
        x.classList.add("lightGreyBg");
        x.classList.remove("greyBg");

        let y = document.querySelector(".bg-dark");
        y.classList.add("navbar-light");
        y.classList.remove("navbar-dark");
        y.classList.add("bg-light");
        y.classList.remove("bg-dark");
    }
}

export { turnDark, turnLight };



