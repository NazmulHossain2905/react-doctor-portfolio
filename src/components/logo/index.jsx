import classes from "./logo.module.css";

const Logo = ({ variant = "dark" }) => {
  return (
    <a
      href="/"
      className={`${classes["logo"]} ${
        variant === "dark" ? classes["light"] : classes["dark"]
      }`}
    >
      RALPH <br />
      EDWARDS.
    </a>
  );
};

export default Logo;
