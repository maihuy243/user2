import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Checkout.scss";
import visa from "./logo/visa.png";

function Checkout({ hide }) {
  const close = useRef();
  const checkoutHide = useRef();

  return (
    <div ref={checkoutHide} className="content">
      <button
        ref={close}
        className="close btn btn-danger"
        onClick={() => hide()}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="products">
        <div className="title">Order Sumary</div>
      </div>
      <div className="pay">
        <div className="pay-method">
          <select>
            <option>Choose method payment</option>
            <option>Cash</option>
            <option>VISA</option>
          </select>
        </div>
        <div className="logo">
          <img src={visa} alt=""></img>
        </div>
        <div className="form-group ">
          <label className="text-white">Card Name</label>
          <input className="form-control input"></input>
        </div>
        <div className="form-group ">
          <label className="text-white">Card Number</label>
          <input className="form-control input"></input>
        </div>
        <div className="row ">
          <div className="form-group col-6">
            <label className="text-white">Date</label>
            <input className="form-control input"></input>
          </div>
          <div className="form-group col-6">
            <label className="text-white">CVC</label>
            <input className="form-control input"></input>
          </div>
        </div>
        <div className="btncheckout mt-5">
          <button className="btn btn-success form-control p-3 ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
