import { Jan_main } from "../Months/Jan/Jan_main";
import { Feb_main } from "../Months/Feb/Feb_main";
import "./Copy.css";
import React, { useState } from "react";
import Navbar from "../Navbar/top";

export function Copy() {
  const [showJan, setJan] = useState(true);
  const [showFeb, setFeb] = useState(false);
  return (
    <div className="Main">
      <Navbar />
      <div className="Months_Tag">
        <div className="Month_tag_align">
          <button
            className="tagBox"
            onClick={() => {
              setJan(showJan === true ? true : true);
              setFeb(false);
            }}
          >
            <h2>Jan</h2>
          </button>
          <button
            className="tagBox"
            onClick={() => {
              setJan(false);
              setFeb(showFeb === true ? true : true);
            }}
          >
            <h2>Feb</h2>
          </button>
          <button className="tagBox">
            <h2>Mar</h2>
          </button>
          <button className="tagBox">
            <h2>Apr</h2>
          </button>
          <button className="tagBox">
            <h2>May</h2>
          </button>
          <button className="tagBox">
            <h2>Jun</h2>
          </button>
          <button className="tagBox">
            <h2>Jul</h2>
          </button>
          <button className="tagBox">
            <h2>Aug</h2>
          </button>
          <button className="tagBox">
            <h2>Sep</h2>
          </button>
          <button className="tagBox">
            <h2>Oct</h2>
          </button>
          <button className="tagBox">
            <h2>Nov</h2>
          </button>
          <button className="tagBox">
            <h2>Dec</h2>
          </button>
        </div>
      </div>
      <div className="list_display">
        <div className="list_display_align">
          {/* <Jan_main /> */}
          {/* <Feb_main /> */}
          {showJan ? <Jan_main /> : showJan}
          {showFeb ? <Feb_main /> : null}
        </div>
      </div>
    </div>
  );
}
