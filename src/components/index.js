import "./style.css";
import favicon from "../assets/favicon.png";

import ask from "./print";

const head = document.querySelector("head");
const link = document.createElement("link");

link.setAttribute("rel", "shortcut icon");
link.setAttribute("type", "image/x-icon");
link.setAttribute("href", favicon);
head.appendChild(link);

function greet() {
  console.log("Jay Jagannath");
}

greet();
ask();
