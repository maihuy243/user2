/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import styles from "./Categories.module.scss";
import RenderProduct from "~/component/RenderProduct/RenderProduct";
import Button from "../Button/Button.js";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";
import Popup from "../Popup/Popup";
import { listPages } from "../uriApi/uriApi";

const cx = classNames.bind(styles);

function Categories({ show }) {
  // let keyList = "listssss";
  const [dataAPI, setDataAPI] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState("man");
  const [listItemAdd, setListItemAdd] = useState([]);
  const [total, setTotal] = useState(0);

  const renderNav = (data) => {
    return data.map((item, index) => (
      <li
        onClick={() => setCategories(item.uri)}
        style={
          item.uri === categories
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
    getData(categories);
  }, [categories]);

  const getData = async (categories) => {
    setIsLoading(true);
    const uri = "https://62d421735112e98e484b2508.mockapi.io/api/products";
    const res = await axios.get(uri);
    const list = res.data;
    const currListItem = list.filter((item) => item.category === categories);
    setIsLoading(false);
    setDataAPI(currListItem);
  };

  const addItem = (idx) => {
    const crrItem = dataAPI.filter((item) => item.id === idx);
    setListItemAdd((prev) => [...prev, ...crrItem]);
  };

  useEffect(() => {
    let sum = 0;
    listItemAdd.length > 0
      ? (sum = listItemAdd.reduce((a, b) => a + Number(b.count), 0))
      : (sum = 0);
    setTotal(sum);
  }, [listItemAdd]);

  const renderListBuy = (listItemAdd) => {
    return listItemAdd.map((item) => (
      <div className={cx("item")} key={item.id}>
        <div className={cx("img")}>
          <img src={item.img} alt="" />
        </div>
        <div className={cx("name")}>{item.name}</div>
        <div className={cx("amount")}>x 1</div>
        <div className={cx("count")}>{item.count} $</div>
        <div className={cx("del")} onClick={() => console.log(item.id)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className={cx("categories")}>
        <Tippy
          trigger="click"
          interactive
          placement="bottom-start"
          render={() => (
            <Popup>
              <div className={cx("list")}>{renderNav(listPages)}</div>
            </Popup>
          )}
        >
          <div className={cx("nav2")}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </Tippy>
        <div className={cx("nav")}>
          <ul>{renderNav(listPages)}</ul>
        </div>
        <div className={cx("total")}>
          <div className={cx("pay")}>
            {total > 0 ? (
              <Button hover onClick={() => show()}>
                Thanh Toán
              </Button>
            ) : (
              <Button disabled>Thanh Toán</Button>
            )}
          </div>
          <div className={cx("title")}>Total : </div>

          <Tippy
            interactive
            placement="bottom-end"
            render={() =>
              listItemAdd.length > 0 && (
                <Popup>
                  <div className={cx("list")}>{renderListBuy(listItemAdd)}</div>
                </Popup>
              )
            }
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
