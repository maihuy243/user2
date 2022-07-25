import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCaretDown,
  faCircleQuestion,
  faEarthAfrica,
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "~/assets/logo/logo.png";
import Popup from "../../Popup/Popup";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "../../Button/Button";
import { publicComponent } from "~/Router/router";

const controlUser = [
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

function Header({ login }) {
  const renderNavHeader = (data) => {
    return data.map(({ path, component, title }) => {
      return (
        <Link key={title} to={path}>
          {title}
        </Link>
      );
    });
  };

  const renderBtn = (datas) => {
    return datas.map((item, index) => (
      <Button key={index} hover large iconLeft={item.icon}>
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
      <div className={cl("form")}>
        <div className={cl("services")}>
          <ul>{renderNavHeader(publicComponent)}</ul>
        </div>
        <Tippy
          trigger="click"
          interactive
          placement="bottom-start"
          render={() => <Popup>{renderNavHeader(publicComponent)}</Popup>}
        >
          <div className={cl("sm-services")}>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </Tippy>
        <Tippy
          interactive
          trigger="click"
          placement="bottom-end"
          render={() => <Popup>{renderBtn(controlUser)}</Popup>}
        >
          <div className={cl("avatar-control")}>
            {login ? {} : <div className={cl("loginheader")}>Login</div>}
          </div>
        </Tippy>
      </div>
    </div>
  );
}

export default Header;
