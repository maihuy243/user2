import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { message, Popconfirm, Modal, Button } from "antd";
import "antd/dist/antd.css";

import Loading from "~/component/Loading/Loading";
import "./Admin.scss";
import Header from "../Header/Header";
import RenderProduct from "~/component/RenderProduct/RenderProduct";

const uri = "https://62d421735112e98e484b2508.mockapi.io/api/products";

function AdminLayout() {
  const [dataApi, setDataApi] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [isShowModalAdd, setIsShowModalAdd] = useState(false);

  const valueSearch = useRef();
  const nameItem = useRef();
  const categoryE = useRef();
  const imgE = useRef();
  const countE = useRef();
  const discountE = useRef();
  const soldE = useRef();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoading(true);
    axios.get(uri).then((res) => setDataApi(res.data));
    setIsLoading(false);
  };

  const showModalEdit = (id) => {
    const crrItem = dataApi.filter((item) => item.id === id);
    const [{ totalSelected, name, count, category, discount, sold, img }] =
      crrItem;

    // nameE.current.value = name;
    // categoryE.current.value = category;
    // imgE.current.value = img;
    // countE.current.value = count;
    // discountE.current.value = discount;
    // soldE.current.value = sold;

    setIsShowModalEdit(true);
  };
  const handleOk = () => {
    setIsShowModalEdit(false);
  };

  const handleCancel = () => {
    setIsShowModalEdit(false);
  };

  // Add Modal

  const handleOkAdd = () => {
    setIsShowModalAdd(false);
  };

  const handleCancelAdd = () => {
    setIsShowModalAdd(false);
  };
  const renderProduct = (list) => {
    return list.map(({ category, count, discount, id, img, name, sold }) => {
      return (
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
              <Button inline onClick={() => showModalEdit(id)}>
                Edit
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderKeys = (list) => {
    if (list.length > 0) {
      const firtItem = Object.keys(list[0]);
      return firtItem.map((item) => <option value={item}>{item}</option>);
    }
  };

  //Search Item

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

  const deleteItem = (id) => {
    axios.delete(uri + "/" + id).then((res) => setDataApi(res.data));
  };
  const confirm = (id) => {
    message.success("Xóa Thành Công !");
    deleteItem(id);
  };

  const cancel = () => {
    message.error("Hủy tác vụ Xóa !");
  };

  console.log(isShowModalAdd);

  return (
    <div className="admin">
      <Header></Header>
      <Button type="primary" onClick={() => setIsShowModalAdd(true)}>
        Add User
      </Button>
      <div className="search row">
        <div className="col-6">
          <label className="form-label">Search :</label>
          <input
            className="form-control p-2 fs-3"
            placeholder="search item...."
            onChange={(e) => searchItem(e.target.value)}
          ></input>
        </div>
        <div className="col-6">
          <label className="form-label">Search By</label>
          <select className="form-select p-2 fs-3" ref={valueSearch}>
            {renderKeys(dataApi)}
          </select>
        </div>
      </div>
      {isShowModalEdit && (
        <Modal
          title="Edit User"
          visible={isShowModalEdit}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="from-group">
            <label className="form-label">Name</label>
            <input className="form-control"></input>
          </div>
          <div className="from-group">
            <label className="form-label">Category</label>
            <input className="form-control"></input>
          </div>
          <div className="from-group">
            <label className="form-label">Img</label>
            <input className="form-control"></input>
          </div>
          <div className="row">
            <div className="from-group col-6">
              <label className="form-label">Count</label>
              <input className="form-control"></input>
            </div>
            <div className="from-group col-6">
              <label className="form-label">Discount</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="row">
            <div className="from-group col-6">
              <label className="form-label">Sold</label>
              <input className="form-control"></input>
            </div>
            <div className="from-group col-6">
              <label className="form-label">Totalselected</label>
              <input className="form-control" disabled></input>
            </div>
          </div>
        </Modal>
      )}
      {isShowModalAdd && (
        <Modal
          visible={isShowModalAdd}
          title="Add User"
          onOk={handleOkAdd}
          onCancel={handleCancelAdd}
        >
          <div className="from-group">
            <label ref={nameItem} className="form-label">
              Name
            </label>
            <input className="form-control"></input>
          </div>
          <div className="from-group">
            <label className="form-label">Category</label>
            <input ref={categoryE} className="form-control"></input>
          </div>
          <div className="from-group">
            <label className="form-label">Img</label>
            <input ref={imgE} className="form-control"></input>
          </div>
          <div className="row">
            <div className="from-group col-6">
              <label className="form-label">Count</label>
              <input ref={countE} className="form-control"></input>
            </div>
            <div className="from-group col-6">
              <label className="form-label">Discount</label>
              <input ref={discountE} className="form-control"></input>
            </div>
          </div>
          <div className="row">
            <div className="from-group col-6">
              <label className="form-label">Sold</label>
              <input ref={soldE} className="form-control"></input>
            </div>
            <div className="from-group col-6">
              <label className="form-label">Totalselected</label>
              <input className="form-control">1</input>
            </div>
          </div>
        </Modal>
      )}
      {isloading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
}

export default AdminLayout;
