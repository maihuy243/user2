import styles from "./Product.module.scss";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

function Product({ children }) {
  return <div className ={cl("product")}>{children}</div>;
}

export default Product;
