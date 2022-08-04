import { Modal } from "antd";
import { useState } from "react";
import axios from "axios";

function Form({ isModal, setIsShowModal, type, itemEdit }) {
  const [crrProduct, setCrrProduct] = useState({
    name: "",
    category: "",
    img: "",
    count: "",
    discount: "",
    sold: "",
    totalSelected: 1,
  });

  //handle
  const handleOk = () => {
    switch (type) {
      case "Add":
        const addItem = async () => {
          await axios.post(
            "https://62d421735112e98e484b2508.mockapi.io/api/products",
            crrProduct
          );
        };
        addItem();
        break;
      case "Edit":
        const editItem = async () => {
          await axios.put(
            `https://62d421735112e98e484b2508.mockapi.io/api/products/${itemEdit.id}`,
            crrProduct
          );
        };
        editItem();
        break;
      default:
        throw new Error("Case Default");
    }
    setCrrProduct({
      name: "",
      category: "",
      img: "",
      count: "",
      discount: "",
      sold: "",
      totalSelected: 1,
    });
    setIsShowModal(false);
  };

  const handelCancel = () => {
    setIsShowModal(false);
  };

  return type === "Add" ? (
    <Modal
      title={type}
      visible={isModal}
      onOk={handleOk}
      onCancel={handelCancel}
    >
      <div className="from-group">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          value={crrProduct.name}
          onChange={(e) =>
            setCrrProduct((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="from-group">
        <label className="form-label">Category</label>
        <input
          className="form-control"
          value={crrProduct.category}
          onChange={(e) =>
            setCrrProduct((prev) => ({
              ...prev,
              category: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="from-group">
        <label className="form-label">Img</label>
        <input
          className="form-control"
          value={crrProduct.img}
          onChange={(e) =>
            setCrrProduct((prev) => ({
              ...prev,
              img: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="row">
        <div className="from-group col-6">
          <label className="form-label">Count</label>
          <input
            className="form-control"
            value={crrProduct.count}
            onChange={(e) =>
              setCrrProduct((prev) => ({
                ...prev,
                count: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="from-group col-6">
          <label className="form-label">Discount</label>
          <input
            className="form-control"
            value={crrProduct.discount}
            onChange={(e) =>
              setCrrProduct((prev) => ({
                ...prev,
                discount: e.target.value,
              }))
            }
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="from-group col-6">
          <label className="form-label">Sold</label>
          <input
            className="form-control"
            value={crrProduct.sold}
            onChange={(e) =>
              setCrrProduct((prev) => ({
                ...prev,
                sold: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="from-group col-6">
          <label className="form-label">Totalselected</label>
          <input className="form-control" value={1} disabled></input>
        </div>
      </div>
    </Modal>
  ) : (
    <Modal
      title={type}
      visible={isModal}
      onOk={handleOk}
      onCancel={handelCancel}
    >
      <div className="from-group">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          placeholder={itemEdit.name}
          onChange={(e) =>
            setCrrProduct((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="from-group">
        <label className="form-label">Category</label>
        <input
          className="form-control"
          placeholder={itemEdit.category}
          onChange={(e) =>
            setCrrProduct((prev) => ({
              ...prev,
              category: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="from-group">
        <label className="form-label">Img</label>
        <input
          className="form-control"
          placeholder={itemEdit.img}
          onChange={(e) =>
            setCrrProduct((prev) => ({
              ...prev,
              img: e.target.value,
            }))
          }
        ></input>
      </div>
      <div className="row">
        <div className="from-group col-6">
          <label className="form-label">Count</label>
          <input
            className="form-control"
            placeholder={itemEdit.count}
            onChange={(e) =>
              setCrrProduct((prev) => ({
                ...prev,
                count: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="from-group col-6">
          <label className="form-label">Discount</label>
          <input
            className="form-control"
            placeholder={itemEdit.discount}
            onChange={(e) =>
              setCrrProduct((prev) => ({
                ...prev,
                discount: e.target.value,
              }))
            }
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="from-group col-6">
          <label className="form-label">Sold</label>
          <input
            className="form-control"
            placeholder={itemEdit.sold}
            onChange={(e) =>
              setCrrProduct((prev) => ({
                ...prev,
                sold: e.target.value,
              }))
            }
          ></input>
        </div>
        <div className="from-group col-6">
          <label className="form-label">Totalselected</label>
          <input className="form-control" value={1} disabled></input>
        </div>
      </div>
    </Modal>
  );
}

export default Form;
