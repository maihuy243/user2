import { createContext, useCallback, useRef, memo, useState } from "react";
import classNames from "classnames/bind";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Categories from "../Categories/Categories";
import Checkout from "../Checkout/Checkout";
import styles from "./DefaultLayout.module.scss";

const cl = classNames.bind(styles);
export const rootContext = createContext({});

function DefauLayout() {
  const [cart, setCart] = useState([]);
  const [showCheckOut, setShowCheckOut] = useState(false);

  return (
    <rootContext.Provider value={{}}>
      <div className={cl("App")}>
        <div className={cl("sidebar")}>
          <SideBar />
        </div>
        <div className={cl("main")}>
          <Header />
          <Categories setCart={setCart} showCheckOut={setShowCheckOut} />
        </div>
        {showCheckOut && (
          <div className={cl("checkout")}>
            <Checkout listCart={cart} hideCheckOut={setShowCheckOut} />
          </div>
        )}
      </div>
    </rootContext.Provider>
  );
}

export default memo(DefauLayout);
