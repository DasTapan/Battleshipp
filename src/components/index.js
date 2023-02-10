import "./style.css";
import favicon from "../assets/favicon.png";

import session from "./session";
import { humanPlayerFactory, cpuPlayerFactory } from "./player";
import gameLoop from "./game";

const head = document.querySelector("head");
const link = document.createElement("link");

link.setAttribute("rel", "shortcut icon");
link.setAttribute("type", "image/x-icon");
link.setAttribute("href", favicon);
head.appendChild(link);

const user = humanPlayerFactory();
const cpu = cpuPlayerFactory();

// start game immediately
const playSession = session(user, cpu);
gameLoop(playSession);

export default playSession;
