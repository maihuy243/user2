import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./RenderProduct.module.scss";
import Button from "../Button/Button";
import Details from "./Details";

const cx = classNames.bind(styles);

function RenderProduct({ data, addItem }) {
  const [showDetails, setShowDetails] = useState(false);
  const [crrId, setCrrId] = useState(1);
  //render Products
  const render = (data) => {
    return data.map((item) => (
      <div key={item.id} className={cx("item")}>
        <div className={cx("img-item")}>
          <img src={item.img} alt="1" />
        </div>
        <div className={cx("title")}>{item.name}</div>
        <div className={cx("sold")}>Sold : {item.sold}</div>
        <div className={cx("price")}>
          <div
            className={item.discount === 0 ? cx("count-active") : cx("count")}
          >
            {item.count}$
          </div>
          <div
            className={
              item.discount === 0 ? cx("discount") : cx("discount-active")
            }
          >
            {item.discount}$
          </div>
        </div>
        <div className={cx("action")}>
          <div className={cx("buy")}>
            <Button
              inline
              hover
              onClick={() => {
                setShowDetails(true);
                setCrrId(item.id);
              }}
            >
              Details
            </Button>
          </div>
          <div className={cx("info")}>
            <Button inline hover onClick={() => addItem(item.id)}>
              Add
            </Button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      {showDetails === true ? (
        <Details data={data} id={crrId} showDetails={setShowDetails} />
      ) : (
        <div className={cx("product")}>{render(data)}</div>
      )}
    </>
  );
}

export default RenderProduct;
