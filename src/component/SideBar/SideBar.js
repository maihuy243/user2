/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const api = "https://62d421735112e98e484b2508.mockapi.io/api/products";

const SOCIAL = [
  {
    icon: <FontAwesomeIcon icon={faFacebookSquare} />,
    title: "Facebook",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagramSquare} />,
    title: "Instagram",
  },
  {
    icon: <FontAwesomeIcon icon={faYoutubeSquare} />,
    title: "Youtube",
  },
  {
    icon: <FontAwesomeIcon icon={faTwitterSquare} />,
    title: "Twitter",
  },
  {
    icon: <FontAwesomeIcon icon={faGooglePlusSquare} />,
    title: "Google Plus",
  },
];

function SideBar() {
  const [datas, setDatas] = useState([]);
  const [indexCrr, setIndexCrr] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(api);
    const lists = await res.data;
    setDatas(lists);
  };

  useEffect(() => {
    const updateIndexCrr = setInterval(() => {
      setIndexCrr(Math.floor(Math.random() * datas.length));
    }, 2500);
    return () => {
      clearInterval(updateIndexCrr);
    };
  }, [indexCrr]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("slide")}>
        {true && (
          <div className={cx("item")} key={datas[indexCrr]?.id}>
            <div className={cx("item-img")}>
              <img src={datas[indexCrr]?.img} alt="img" />
            </div>
            <div className={cx("title")}>{datas[indexCrr]?.name}</div>
          </div>
        )}
      </div>

      {/* End */}
      <div className={cx("contact")}>
        <div className={cx("title")}>Contact for me !</div>
        <div className={cx("social")}>
          {SOCIAL.map((item, index) => (
            <Tippy key={index} content={item.title} placement="bottom">
              <div className={cx("item")}>{item.icon}</div>
            </Tippy>
          ))}
        </div>
      </div>
      <div className={cx("info")}>
        <div className={cx("iteminfo")}>
          <span>Hotline</span>: 096.341.1489
        </div>
        <div className={cx("iteminfo")}>
          <span>Email</span>: Maihuy245@gmail.com
        </div>
        <div className={cx("iteminfo")}>
          <span>Working</span>: Monday - Satuday (off Sunday)
        </div>
        <div className={cx("copyright")}>
          <FontAwesomeIcon icon={faCopyright} /> Maihuy245
        </div>
      </div>
    </div>
  );
}

export default SideBar;
