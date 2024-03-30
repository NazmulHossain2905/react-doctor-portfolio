import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

import classes from "./about.module.css";
import about from "../../assets/images/about.png";

import Button from "../button";

import logo1 from "../../assets/icons/featured-1.svg";
import logo2 from "../../assets/icons/featured-2.svg";
import logo3 from "../../assets/icons/featured-3.svg";

const About = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={`${classes["about"]} container`}>
        <div className={classes["about-content"]}>
          <div className={classes["about-img-parent"]}>
            <img src={about} alt="About" className={classes["about-img"]} />
          </div>

          <div className={classes["about-text-content"]}>
            <h2 className={classes["about-name"]}>Hello, I’m Ralph Edwards.</h2>

            <p className={classes["about-desc"]}>
              Phasellus blandit, metus sit amet euismod facilisis, ante justo
              mollis elit, eu suscipit tellus lorem non dolor. Aliquam faucibus
              odio tempus nibh fringilla tincidunt. Proin luctus dui odio, sed
              egestas erat condimentum non.
            </p>

            <div className={classes["about-btn-wrapper"]}>
              <Button>
                Send Message <BsArrowRight />
              </Button>
              <Button variant="secondary">
                Download cv <FiDownload />
              </Button>
            </div>
          </div>
        </div>

        <div className={classes["featured-container"]}>
          <p className={classes["featured-heading"]}>Featured by:</p>

          <div className={classes["logo-wrapper"]}>
            <img src={logo1} className={classes["logo"]} />
            <img src={logo2} className={classes["logo"]} />
            <img src={logo3} className={classes["logo"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
