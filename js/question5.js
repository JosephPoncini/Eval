import { turnDark, turnLight } from "./dashboard.js";

let mode = localStorage.getItem('mode');
mode == "dark" ? turnDark() :  ""