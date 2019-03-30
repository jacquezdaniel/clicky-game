import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">
    <header class="header">Clicky Game
    <h1 class="header">Click on an image to earn points, but don't click on any more than once!</h1>
    {props.children}
    </header>
    </h1>
}

export default Title;
