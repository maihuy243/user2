import classNames from "classnames/bind";
import styles from "./RenderProduct.module.scss";
import Button from "../Button/Button";

const cx = classNames.bind(styles);

function RenderProduct({ data, addItem }) {
  //render Products
  const render = (data) => {
    return data.map((item, index) => (
      <div key={index} className={cx("item")}>
        <div className={cx("img-item")}>
          <img src={item.img} alt="1" />
        </div>
        <div className={cx("title")}>{item.name}</div>
        <div className={cx("sold")}>Sold : {item.sold}</div>
        <div className={cx("price")}>
          <div className={cx("count")}>Price : {item.count} $</div>
          <div className={cx("discount")}>{item.discount}</div>
        </div>
        <div className={cx("action")}>
          <div className={cx("buy")}>
            <Button inline hover>
              Buy
            </Button>
          </div>
          <div className={cx("info")}>
            <Button inline hover onClick={() => addItem(index)}>
              Add
            </Button>
          </div>
        </div>
      </div>
    ));
  };

  return <div className={cx("product")}>{render(data)}</div>;
}

export default RenderProduct;
