import React from "react";
import classes from "./header.module.css";
import Button from "../button";

import headerImg from "../../assets/images/header-img.png";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <header className={`${classes["header"]} container`}>
        <div className={classes["header-content"]}>
          <div>
            <h4 className={classes["header-name"]}>💉 RALPH EDWARDS</h4>

            <h1 className={classes["header-title"]}>
              27+ Years of Neurologists Doctor.
            </h1>
          </div>

          <p className={classes["header-desc"]}>
            Phasellus blandit, metus sit amet euismod facilisis, ante justo
            mollis elit, eu suscipit tellus lorem non dolor aliquam faucibus
            odio tempus nibh.
          </p>

          <div className={classes["header-button-wrapper"]}>
            <Button>Learn about me</Button>
            <Button variant="secondary">Patient Success story</Button>
          </div>
        </div>
        <div className={classes["header-img-parent"]}>
          <img
            src={headerImg}
            className={classes["header-img"]}
            alt="Header Image"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
