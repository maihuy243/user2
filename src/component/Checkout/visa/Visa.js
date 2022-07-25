import visa from "./logo/visa.png";
import "./Visa.scss";

function Visa() {
  return (
    <div className="visa">
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
      <div className="btncheckout mt-3">
        <button className="btn btn-warning form-control p-2 ">Add Card</button>
      </div>
    </div>
  );
}

export default Visa;
