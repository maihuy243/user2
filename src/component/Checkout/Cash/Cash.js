import cash from "./logo/cash.png";
import "./cash.scss";

function Cash() {
  return (
    <div className="cash">
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
            <label className="text-white text">Country</label>
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
      <div className="btncheckout mt-1">
        <button className="btn btn-warning form-control p-1 mt-3 ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cash;
