import nav from "./nav";
import {
    top,
    bottom
} from "./footer";
import makeButton from "./button";
import { makeCololrStyle} from "./botton-styles";

console.log(
    nav(),
    top,
    bottom,
    makeButton("My First Button"),
    makeCololrStyle("cyan")
);