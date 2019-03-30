import React from "react";
import "./style.css";

function NavTabs () {
    return (
            <nav class="navbar">
                <ul class="brand">
                    <a href="/">Clicky Game</a>
                </ul>
                <ul class>Click and Image To Begin</ul>
                <ul>
                    Score:
                    "0"
                    | Top Score
                    "0"
                </ul>
            </nav>
    );
}

export default NavTabs;