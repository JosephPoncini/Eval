import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() : ""

//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity

//Get Elements
let api = document.getElementById("api");

let apiDataGoesHere = document.getElementById("apiDataGoesHere"); //make sure to add div element

// async functions
const GetFetch = async (url) => {
    const promise = await fetch(url);
    const data = promise.json();

    return data
}

// btn functions

api.addEventListener("click", async () => {


    let url;
    let run = true;
    console.log(api.value);
    switch (api.value) {
        case "1":
            url = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json";
            break;
        case "2":
            url = "https://api.agify.io?name=Joe";
            break;
        case "3":
            url = 'https://www.boredapi.com/api/activity';
            break;
        default:
            run = false;
    }

    if (run) {
        apiDataGoesHere.innerHTML = "";



        let data = await GetFetch(url);
        console.log(data);

        let response = "Response: \n";
        
        let count = 0;
        response += ObjectDataToString(data,count);

        apiDataGoesHere.innerText = response;
    }

})

const ObjectDataToString = (obj, count) => {

    let str = "";

    let space = "\u00A0\u00A0"
    for(let i = 0; i < count; i++){
        space += "\u00A0\u00A0"
    }

    count += 1;

    Object.entries(obj).forEach(([key, value]) => {
        
        if (typeof (key,value) === "object") {
            str += space + key + ":\n" + ObjectDataToString((key, value), count);
        }else{
            str += space + key + ": " + value + "\n";
        }
    })

    return str;

}