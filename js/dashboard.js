//My dashboard js wasn't doing anyhting so I made into a functions script that all my other scripts would have access to, mainly so dark and light mode can be applied to them

const turnDark = () => {
    //I check which mode it is from local storage, this is important when I open up the webpage
    let mode = localStorage.getItem('mode');

    //This if statement is necessary for certain circumstances when the function gets called but the mode isn't dark
    if (mode == "dark") {

        //I use query Selector to find the elements with the classes I want to change
        let x = document.querySelector(".lightGreyBg");

        //I replace the classes... the more tedious way
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
    //I check which mode it is from local storage, this is important when I open up the webpage
    let mode = localStorage.getItem('mode');

    //This if statement is necessary for certain circumstances when the function gets called but the mode isn't dark
    if (mode == "light") {

        //I use query Selector to find the elements with the classes I want to change
        let x = document.querySelector(".greyBg");

        //I use query Selector to find the elements with the classes I want to change
        x.classList.add("lightGreyBg");
        x.classList.remove("greyBg");

        //I replace the classes... the more tedious way
        let y = document.querySelector(".bg-dark");
        y.classList.add("navbar-light");
        y.classList.remove("navbar-dark");
        y.classList.add("bg-light");
        y.classList.remove("bg-dark");
    }
}

export { turnDark, turnLight };



