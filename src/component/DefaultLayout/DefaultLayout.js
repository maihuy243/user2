import { createContext, useCallback, useRef } from "react";
import classNames from "classnames/bind";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Categories from "../Categories/Categories";
import Checkout from "../Checkout/Checkout";
import styles from "./DefaultLayout.module.scss";

const cl = classNames.bind(styles);
export const rootContext = createContext({});

function DefauLayout() {
  const checkout = useRef();
  const showCheckOut = useCallback(() => {
    checkout.current.style.display = "block";
  }, []);
  const hideCheckOut = useCallback(() => {
    checkout.current.style.display = "none";
  }, []);

  return (
    <rootContext.Provider value={{}}>
      <div className={cl("App")}>
        <div className={cl("sidebar")}>
          <SideBar />
        </div>
        <div className={cl("main")}>
          <Header />
          <Categories show={showCheckOut} />
        </div>
        <div ref={checkout} className={cl("checkout")}>
          <Checkout hide={hideCheckOut} />
        </div>
      </div>
    </rootContext.Provider>
  );
}

export default DefauLayout;
