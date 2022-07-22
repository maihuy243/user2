import { useRef } from "react";
import "./Product.scss";

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
      <div className="product">{children}</div>
    </div>
  );
}

export default Product;
