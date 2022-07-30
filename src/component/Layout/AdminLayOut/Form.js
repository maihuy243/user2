import { Modal } from "antd";
import { useRef } from "react";

function Form({ isModal, setIsShowModal, type }) {
  const nameInput = useRef();

  console.log(nameInput.current);
  //handle
  const handleOk = () => {
    switch (type) {
      case "Add":
        //handle
        console.log("add");
        break;
      case "Edit":
        //handle
        console.log("Edit");

        break;
      default:
        throw new Error("Case Default");
    }
    setIsShowModal(false);
  };

  const handelCancel = () => {
    setIsShowModal(false);
  };

  return (
    <Modal
      title={type}
      visible={isModal}
      onOk={handleOk}
      onCancel={handelCancel}
    >
      <div className="from-group">
        <label className="form-label">Name</label>
        <input ref={nameInput} className="form-control"></input>
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
          <input className="form-control" value={1} disabled></input>
        </div>
      </div>
    </Modal>
  );
}

export default Form;
