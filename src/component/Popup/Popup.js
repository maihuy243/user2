import classNames from "classnames/bind";
import styles from "./Popup.module.scss";

const cl = classNames.bind(styles);

function Popup({ children }) {
  return <div className={cl("popup")}>{children}</div>;
}

export default Popup;
