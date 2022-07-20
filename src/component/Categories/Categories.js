import styles from "./Categories.module.scss";
import classNames from "classnames/bind";
import { listPages } from "../uriApi/uriApi";
import RenderProduct from "~/component/RenderProduct/RenderProduct";
import Button from "../Button/Button.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import { Fragment } from "react";
import Popup from "../Popup/Popup";
import Tippy from "@tippyjs/react/headless";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Categories() {
  const [dataAPI, setDataAPI] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [dataEndPoint, setDataEndPoint] = useState("man");
  const [listItemAdd, setListItemAdd] = useState([]);
  const [total, setTotal] = useState(0);

  const renderNav = (data) => {
    return data.map((item, index) => (
      <li
        onClick={() => setDataEndPoint(item.uri)}
        style={
          item.uri === dataEndPoint
            ? {
                backgroundColor: "#db644c",
                color: "#fff",
              }
            : {}
        }
        key={index}
        className={cx("item")}
      >
        {item.title}
      </li>
    ));
  };

  useEffect(() => {
    getData(dataEndPoint);
  }, [dataEndPoint]);

  const getData = async (endpoint = "man") => {
    setIsLoading(true);
    const uri = "https://62d421735112e98e484b2508.mockapi.io/api/" + endpoint;
    const res = await axios.get(uri);
    const list = res.data;
    setIsLoading(false);
    setDataAPI(list);
  };

  const addItem = (idx) => {
    const crrItem = dataAPI.filter((item, index) => index === idx);
    setListItemAdd((prev) => [...prev, ...crrItem]);
  };

  useEffect(() => {
    let sum = 0;
    listItemAdd.length > 0
      ? (sum = listItemAdd.reduce((a, b) => a + Number(b.count), 0))
      : setTotal(sum);
    console.log(sum);
    setTotal(sum);
  }, [listItemAdd]);

  const renderListBuy = (listItemAdd) => {
    return listItemAdd.map((item, index) => (
      <div className={cx("item")} key={index}>
        <div className={cx("img")}>
          <img src={item.img} alt="" />
        </div>
        <div className={cx("name")}>{item.name}</div>
        <div className={cx("count")}>{item.count} $</div>
        <div className={cx("del")}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className={cx("navigation")}>
        <div className={cx("nav")}>
          <ul>{renderNav(listPages)}</ul>
        </div>
        <div className={cx("total")}>
          <div className={cx("pay")}>
            <Button hover light>
              Xuất Hóa Đơn
            </Button>
          </div>
          <div className={cx("title")}>Total : </div>

          <Tippy
            interactive
            placement="bottom-end"
            render={() => (
              <Popup>
                <div className={cx("list")}>{renderListBuy(listItemAdd)}</div>
              </Popup>
            )}
          >
            <div className={cx("cout")}> $ {total}</div>
          </Tippy>
        </div>
      </div>
      <Product>
        {loading && <Loading />}
        <RenderProduct data={dataAPI} addItem={addItem} />
      </Product>
    </Fragment>
  );
}

export default Categories;
