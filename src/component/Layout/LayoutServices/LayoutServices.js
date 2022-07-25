import Header from "../Header/Header";
import "./Layoutservices.scss";

function LayoutServices({ children }) {
  return (
    <div className="App2">
      <Header />
      <div className="services">
        <div className="content">
          <div className="title">Trung tâm hỗ trợ Người mua GUMAX</div>
          <div className="form-group form">
            <input
              className="input form-control"
              placeholder="Enter search keywords"
            ></input>
            <button className="btn btn-danger">Search</button>
          </div>
          <div className="bg"></div>
        </div>
      </div>
      <div className="main">{children}</div>
    </div>
  );
}

export default LayoutServices;
