import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { Fragment } from "react";

import "./Checkout.scss";
import visa from "./logo/visa.png";
import cash from "./logo/cash.png";

const options = [
  { value: "visa", label: "Visa" },
  { value: "cash", label: "Cash" },
];

function Checkout({ listCart, hideCheckOut }) {
  const [payType, setPayType] = useState("visa");

  // const renderOder = (list) => {
  //   return list.map((item) => (
  //     <div className="item" key={item.id}>
  //       <div className="img">
  //         <img src={item.img} alt=""></img>
  //       </div>
  //       <div className="name">{item.name}</div>
  //       <div className="amount">
  //         <button>
  //           <FontAwesomeIcon icon={faPlus} />
  //         </button>
  //         <input placeholder="1"></input>
  //         <button>
  //           <FontAwesomeIcon icon={faMinus} />
  //         </button>
  //       </div>
  //       <div className="price">{item.count}$</div>
  //     </div>
  //   ));
  // };

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
      const { totalSelected, name, count, img, id } = item;
      return (
        <div className="item" key={id}>
          <div className="img">
            <img src={img} alt=""></img>
          </div>
          <div className="name">{name}</div>
          <div className="amount">
            <button>
              <FontAwesomeIcon icon={faMinus} onClick={totalSelected - 1} />
            </button>
            <input
              placeholder={
                totalSelected < 1 ? totalSelected === 1 : totalSelected
              }
            ></input>
            <button>
              <FontAwesomeIcon icon={faPlus} onClick={totalSelected + 1} />
            </button>
          </div>
          <div className="price">{count * totalSelected}$</div>
        </div>
      );
    });
  };

  const sumCount = (arr) => {
    return arr.reduce((a, b) => a + b.count, 0);
  };

  const totalCount = (arr) => {
    return arr.reduce((a, b) => a + b.count, 0);
  };

  return (
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
        {payType === "visa" && (
          <>
            <div className="logo">
              <img src={visa} alt=""></img>
            </div>
            <div className="form-group">
              <div className="form-group form-input ">
                <label className="text-white text">Card Name</label>
                <input className="form-control input"></input>
              </div>
              <div className="form-group form-input">
                <label className="text-white text">Card Number</label>
                <input className="form-control input"></input>
              </div>
              <div className="row">
                <div className="form-group col-6 form-input ">
                  <label className="text-white text">Date</label>
                  <input className="form-control input"></input>
                </div>
                <div className="form-group col-6 form-input">
                  <label className="text-white text">CVC</label>
                  <input className="form-control input"></input>
                </div>
              </div>
            </div>
            <div className="btncheckout">
              <button className="btn btn-warning form-control p-3 ">
                Add Card
              </button>
            </div>
          </>
        )}
        {payType === "cash" && (
          <>
            <div className="logo">
              <img src={cash} alt=""></img>
            </div>
            <div className="form-group">
              <div className="form-group form-input ">
                <label className="text-white text">Address</label>
                <input className="form-control input"></input>
              </div>
              <div className="row">
                <div className="form-group col-6 form-input ">
                  <label className="text-white text">Contry</label>
                  <input className="form-control input"></input>
                </div>
                <div className="form-group col-6 form-input">
                  <label className="text-white text">Zipcode</label>
                  <input className="form-control input"></input>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6 form-input ">
                  <label className="text-white text">City</label>
                  <input className="form-control input"></input>
                </div>
                <div className="form-group col-6 form-input">
                  <label className="text-white text">Mobile Phone</label>
                  <input className="form-control input"></input>
                </div>
              </div>
            </div>
            <div className="btncheckout">
              <button className="btn btn-warning form-control p-3 ">
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
