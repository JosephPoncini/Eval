import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() :  ""

//nothing to do on this page except apply the dark/light modes