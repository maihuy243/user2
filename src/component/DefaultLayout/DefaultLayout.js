import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Categories from "../Categories/Categories";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { createContext } from "react";
import RenderProduct from "../RenderProduct/RenderProduct";
const cl = classNames.bind(styles);
export const rootContext = createContext({});

function DefauLayout() {
  return (
    <rootContext.Provider value={{}}>
      <div className={cl("App")}>
        <div className={cl("sidebar")}>
          <SideBar />
        </div>
        <div className={cl("main")}>
          <Header />
          <Categories />
        </div>
      </div>
    </rootContext.Provider>
  );
}

export default DefauLayout;
