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

  // const checkout = useRef();

  // const showCheckOut = useCallback(() => {
  //   checkout.current.style.display = "flex";
  // }, []);
  // const hideCheckOut = useCallback(() => {
  //   checkout.current.style.display = "none";
  // }, []);

  console.log(showCheckOut);
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
            <Checkout cart={cart} hideCheckOut={setShowCheckOut} />
          </div>
        )}
      </div>
    </rootContext.Provider>
  );
}

export default memo(DefauLayout);
