import React from "react";
import "./style.css";

const Nav = props => (
  <nav class="navbar">
    <ul class="brand">
      <a href="/">{props.title}</a>
        </ul>
  
        <ul id="rw" class>{props.rightWrong}</ul>
  
        <ul id="cur-sco" class>Current Score: {props.score}</ul>
  
        <ul id="top-sco" class>Top Score: {props.topScore}</ul>
    </nav>
  );
  
  export default Nav;