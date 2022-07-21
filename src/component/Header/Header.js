import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAfrica,
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "~/assets/logo/logo.png";
import Popup from "../Popup/Popup";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const lists = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "Tài Khoản",
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAfrica} />,
    title: "Ngôn Ngữ",
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Câu Hỏi Thường Gặp",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Cài Đặt",
  },
  {
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    title: "Đăng Xuất",
  },
];

const cl = classNames.bind(styles);

function Header() {
  const renderBtn = () => {
    return lists.map((item, index) => (
      <Button key={index} large hover light iconLeft={item.icon}>
        {item.title}
      </Button>
    ));
  };
  return (
    <div className={cl("header")}>
      <div className={cl("title")}>
        <img src={logo} alt="logo" />
        <p>GUMAX - Pioneering fashion forecast</p>
      </div>
      <div className={cl("content")}>
        <ul>
          <li>Support</li>
          <li>New Trend</li>
          <li>Policy</li>
          <li>Information</li>
          <li>Shop System</li>
        </ul>
      </div>
      <Tippy
        trigger="click"
        delay={[0, 300]}
        placement="bottom-end"
        render={() => <Popup>{renderBtn()}</Popup>}
      >
        <div className={cl("avatar-control")}>
          <img
            alt="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfb4boKKaHu5x1oFASsO92hJb-78nyVcFKRT_WxvRf1O165kUOYWfa0uGn12tfdw8uRU&usqp=CAU"
          />
        </div>
      </Tippy>
    </div>
  );
}

export default Header;
