import * as React from "react";
import "./top.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <a href="/" className="logo">
        LOGO
      </a>
      <div className="menu_option">
        <a>My Thought</a>
        <a href="Copy">Copy</a>
      </div>
    </div>
  );
}
