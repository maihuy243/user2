import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

import "./Checkout.scss";
import Visa from "./visa/Visa";
import Cash from "./Cash/Cash";
import Login from "./Login/Login";

const options = [
  { value: "visa", label: "Visa" },
  { value: "cash", label: "Cash" },
];

function Checkout({ listCart, hideCheckOut }) {
  const [payType, setPayType] = useState("visa");
  const [loginAuth, setLoginAuth] = useState(false);

  const renderOder = (listCart) => {
    //convert Unique Object width ID
    const uniqueArr = [
      ...new Map(listCart.map((item) => [item["id"], item])).values(),
    ];

    //get arr id
    const listIdUnique = uniqueArr.reduce((a, b) => {
      return [...a, b.id];
    }, []);

    const result = [];
    for (let i = 0; i <= listIdUnique.length; i++) {
      //lấy tất cả phần tử có id là
      const sumNumberID = listCart.filter(
        (item) => item.id === listIdUnique[i]
      );
      //lấy số lượng của từng id push vào mảng mới
      const totalNew = sumNumberID.length;
      // eslint-disable-next-line no-unused-expressions
      totalNew > 0 ? result.push(totalNew) : totalNew;
    }

    const listProductUnique = uniqueArr.map((item, index) => {
      return {
        ...item,
        //sửa total dựa vào index
        totalSelected: result[index],
      };
    });

    return listProductUnique.map((item) => {
      const { totalSelected, name, count, discount, img, id } = item;

      return (
        <div className="item" key={id}>
          <div className="img">
            <img src={img} alt=""></img>
          </div>
          <div className="name">{name}</div>
          <div className="amount">
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input placeholder={totalSelected}></input>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="price">
            {discount > 0 ? discount * totalSelected : count * totalSelected}$
          </div>
        </div>
      );
    });
  };

  const sumCount = (arr) => {
    return arr.reduce((a, b) => a + b.count, 0);
  };

  const totalCount = (arr) => {
    return arr.reduce((a, b) => {
      if (b.discount > 0) return a + b.discount;
      else return a + b.count;
    }, 0);
  };

  return (
    <>
      {loginAuth === true ? (
        <div className="content">
          <button
            className="close btn btn-danger"
            onClick={() => hideCheckOut(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="products">
            <div className="title">Order Sumary</div>
            <div className="listcart">{renderOder(listCart)}</div>
            <div className="total">
              <div className="vat ">
                <div className="vat-title">VAT</div>
                <div className="vat-value">0%</div>
              </div>
              <div className="dellvery my-2 ">
                <div className="dellvery-title">Dellvery</div>
                <div className="dellvery-value">{sumCount(listCart)}$</div>
              </div>
              <div className="totalsum  justify-conent-between">
                <div className="totalsum-title">TOTAL</div>
                <div className="totalsum-value">{totalCount(listCart)} $</div>
              </div>
            </div>
          </div>
          <div className="pay">
            <div className="pay-method">
              <Select options={options} onChange={(e) => setPayType(e.value)} />
            </div>
            {payType === "visa" && <Visa />}
            {payType === "cash" && <Cash />}
          </div>
        </div>
      ) : (
        <Login setLoginAuth={setLoginAuth} hideCheckOut={hideCheckOut} />
      )}
    </>
  );
}

export default Checkout;
