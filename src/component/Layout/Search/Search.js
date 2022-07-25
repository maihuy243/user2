import { useRef } from "react";
import "./Search.scss";

function Product({ children, sort, search }) {
  const inputE = useRef();

  return (
    <div className="products">
      <div className="formsearch">
        <div className="sort">
          <button onClick={() => sort()}>Sort Price</button>
        </div>
        <div className="search">
          <input
            ref={inputE}
            placeholder="search..."
            onInput={() => search(inputE.current.value)}
          ></input>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Product;
