import React from "react";
import "./navbar.css";

export const Navbar = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <p>Where in the world?</p>
          </li>
          {props.credit === true ? (
            <li>
              <p>By Vaibhav Sundeep</p>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};
