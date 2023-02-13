import "./style.css";
import favicon from "../assets/favicon.png";
import githubIcon from "../assets/github-icon.png";

import session from "./session";
import { humanPlayerFactory, cpuPlayerFactory } from "./player";

const head = document.querySelector("head");
const link = document.createElement("link");

link.setAttribute("rel", "shortcut icon");
link.setAttribute("type", "image/x-icon");
link.setAttribute("href", favicon);
head.appendChild(link);

const imageTag = document.querySelector(".footer > a img");
imageTag.src = githubIcon;

const user = humanPlayerFactory();
const cpu = cpuPlayerFactory();

// start game immediately
const playSession = session(user, cpu);

export default playSession;
