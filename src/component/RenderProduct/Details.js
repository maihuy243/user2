import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.scss";

function Details({ data, id, showDetails }) {
  const renderDetails = (data, id) => {
    const itemCurrent = data.filter((item) => item.id === id);
    const [{ name, count, discount, sold, img }] = itemCurrent;
    return (
      <>
        <div className="img">
          <img src={img} alt=""></img>
        </div>
        <div className="content-details">
          <h2>{name}</h2>
          <div className="sold">Đã bán : {sold}</div>
          <div className="count">Giá Niêm Yết : {count}</div>
          <div className="discount">Discount : {discount}</div>
          <div className="pay">Discount : {discount}</div>
        </div>
      </>
    );
  };
  return (
    <div className="details">
      <div className="back">
        <button onClick={() => showDetails(false)}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
      </div>

      <div className="details-product">{renderDetails(data, id)}</div>
    </div>
  );
}

export default Details;
