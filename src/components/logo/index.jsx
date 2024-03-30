import classes from "./logo.module.css";

const Logo = (variant = "dark") => {
  return (
    <a
      href="/"
      className={`${classes["logo"]} ${
        variant === "dark" ? classes["dark"] : classes["light"]
      }`}
    >
      RALPH <br />
      EDWARDS.
    </a>
  );
};

export default Logo;
