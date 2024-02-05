import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() : ""

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let studentArray = [
    "Ankurit Dutt",
    "Avery Hillstrom",
    "Adrian Martinez",
    "Aiden Foo",
    "Aidan Younathan",
    "Alexander Soria",
    "Ashur Nanno",
    "Brandon Nguyen",
    "Bria Harrold-hill",
    "Bronel Lazar",
    "Caleb Sylvia",
    "Christopher Dominguez",
    "Elizabeth Boron-Trotter",
    "Ellie Rasuli",
    "Fernando Gutierrez",
    "George Haddad",
    "Halley Pham",
    "Jayvon Khuth",
    "Jared Ly",
    "Jeriah Marson",
    "Jerrod Packard",
    "Jesus Lares",
    "Joseph Poncini",
    "Josue Rosales",
    "Kyle Ma",
    "Leonardo Garcia",
    "Liam Garcia",
    "Marcos Rodriguez",
    "Mark Ortega",
    "Max Mendoza",
    "Michael Heckerman",
    "Michael Pantoja",
    "Natalia Cardona",
    "Raudel Alvarado",
    "Robert Arias",
    "Sebastian Breve-Sanchez",
    "Sinatha Chin",
    "Toan Ngo",
    "Treece Hillstrom",
    "Tyler Nguyen",
    "Zachary Dressel",
    "Zahid Afsar",
    "Waqas Dad",
    "Xavier Hopkins"
];

let studentObjectArray = []

studentArray.forEach(student => {
    let x = student.split(" ");
    studentObjectArray.push(new Student(x[0], x[1]));
})
console.log(studentObjectArray)
let keyboardAlphabet = "qwertyuiopasdfghjklzxcvbnm";
let byFirst = true;

let AddNamesHere = document.getElementById("AddNamesHere");

for (let i = 0; i < keyboardAlphabet.length; i++) {
    document.getElementById(keyboardAlphabet[i] + "Btn").addEventListener("click", () => {

        let result = "";
        AddNamesHere.innerText = "Students: "

        if (byFirst) {
            studentObjectArray.forEach(x => {
                if (x.firstName[0].toLowerCase() == keyboardAlphabet[i]) {
                    result += x.firstName + " " + x.lastName + ", "
                }
            })
        } else {
            studentObjectArray.forEach(x => {
                if (x.lastName[0].toLowerCase() == keyboardAlphabet[i]) {
                    result += x.firstName + " " + x.lastName + ", "
                }
            })
        }
        if (result) {

            AddNamesHere.innerText = "Students: " + result.substring(0, result.length - 2);
        }else{
            AddNamesHere.innerText = "No Student";
        }


    })
}

let btnradio1 = document.getElementById("btnradio1");
let btnradio2 = document.getElementById("btnradio2");

btnradio1.addEventListener("click", () => {
    AddNamesHere.innerText = "Students: "
    byFirst = true;
})

btnradio2.addEventListener("click", () => {
    AddNamesHere.innerText = "Students: "
    byFirst = false;
})

