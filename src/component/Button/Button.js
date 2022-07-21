import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cl = classNames.bind(styles);

function Button({
  href,
  disabled = false,
  mdbold = false,
  hover = false,
  inline = false,
  bg = false,
  light = false,
  large = false,
  outLine = false,
  iconLeft = false,
  iconRight = false,
  children,
  ...multiProps
}) {
  const classes = cl("button", {
    bg,
    disabled,
    mdbold,
    light,
    hover,
    inline,
    large,
    outLine,
    iconLeft,
    iconRight,
  });
  return (
    <button className={classes} {...multiProps}>
      {iconLeft && <span className={cl("icon")}>{iconLeft}</span>}
      <span className={cl("content")}>{children}</span>
      {iconRight && <span className={cl("icon")}>{iconRight}</span>}
    </button>
  );
}

export default Button;
