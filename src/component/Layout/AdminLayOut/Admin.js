import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";

import "./Admin.scss";
import Header from "../Header/Header";
import Button from "~/component/Button/Button";

const uri = "https://62d421735112e98e484b2508.mockapi.io/api/products";
function AdminLayout() {
  const [dataApi, setDataApi] = useState([]);
  const valueSearch = useRef();

  const getData = () => {
    axios.get(uri).then((res) => setDataApi(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderProduct = (list) => {
    return list.map(({ category, count, discount, id, img, name, sold }) => {
      return (
        <>
          <div
            key={id}
            className="items d-flex justify-content-around align-items-center"
          >
            <div className="item col-1">{id}</div>
            <div className="item col-2">{name}</div>
            <div className="item col-1">{category}</div>
            <div className="item col-3">{img}</div>
            <div className="item col-1">{count}</div>
            <div className="item col-1">{discount}</div>
            <div className="item col-1">{sold}</div>
            <div className="item col-2 d-flex justify-content-around align-items-center">
              <div>
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={() => confirm(id)}
                  onCancel={cancel}
                  cancelText="No"
                  okText="Yes"
                >
                  <Button inline>Delete</Button>
                </Popconfirm>
              </div>
              <div>
                <Button inline onClick={() => editItem(id)}>
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  const renderKeys = (list) => {
    if (list.length > 0) {
      const firtItem = Object.keys(list[0]);
      return firtItem.map((item) => <option value={item}>{item}</option>);
    }
  };

  const searchItem = (e) => {
    const typeSearch = valueSearch.current.value;
    if (e !== "") {
      const arrNew = [];
      if (
        typeSearch === "name" ||
        typeSearch === "category" ||
        typeSearch === "img"
      ) {
        dataApi.forEach((item) => {
          // eslint-disable-next-line no-unused-expressions
          item[typeSearch].includes(e) ? arrNew.push(item) : {};
        });
      } else {
        dataApi.forEach((item) => {
          // eslint-disable-next-line no-unused-expressions
          item[typeSearch].toString().includes(e) ? arrNew.push(item) : {};
        });
      }
      setDataApi(arrNew);
    } else getData();
  };

  //handle Delete Item

  // const deleteItem = (id) => {
  //
  //   axios.delete(uri + "/ " + id, {

  // });
  // };
  const confirm = (id) => {
    message.success("Xóa Thành Công !");
  };

  const cancel = () => {
    message.error("Hủy tác vụ Xóa !");
  };

  const editItem = (id) => {};
  return (
    <div className="admin">
      <Header></Header>

      <div className="search row">
        <div className="col-6">
          <label className="form-label">Search :</label>
          <input
            className="form-control p-2 fs-3"
            placeholder="search item...."
            onInput={(e) => searchItem(e.target.value)}
          ></input>
        </div>
        <div className="col-6">
          <label className="form-label">Search By</label>
          <select className="form-select p-2 fs-3" ref={valueSearch}>
            {renderKeys(dataApi)}
          </select>
        </div>
      </div>

      <div className="listproduct">
        <div className=" row fixed  ">
          <div className="item col-1">Id</div>
          <div className="item col-2">Name</div>
          <div className="item col-1">Category</div>
          <div className="item col-3">Img</div>
          <div className="item col-1">Count</div>
          <div className="item col-1">Discount</div>
          <div className="item col-1">Sold</div>
          <div className="item col-2">Action</div>
        </div>
        <div className="listsitem">
          {dataApi.length > 0 && renderProduct(dataApi)}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
