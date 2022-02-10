import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";

const AddOrderCounter = ({ name, price, quanity, thc }) => {
  const [amount, setAmount] = useState(quanity);

  const changeOrderValue = (currentValue, newValue) => {
    if (currentValue === 0 && newValue < 0) {
      return null;
    } else if (currentValue === 15 && newValue > 15) {
      return null;
    }
    setAmount(newValue);
  };

  return (
    <ListGroupItem className="my-2 border-0 rounded d-flex flex-row justify-content-between align-items-center bg-light">
      <div>
        <h6 className="mb-0">
          {name} <span className="hnh-dark-text">•</span>{" "}
          <span className="text-muted">${price}</span>
        </h6>
        <div className="m-0 p-0">
          <small>Quanity left: {quanity}</small>
        </div>
      </div>
      <div className="counter">
        <button
          className="button"
          title="-1"
          onClick={() => changeOrderValue(amount, amount - 1)}
        >
          −
        </button>
        <div className="input-wrapper">
          <input
            className="input"
            maxLength={1}
            type="text"
            value={0}
            readOnly={true}
          />
        </div>
        <button
          className="button"
          title="+1"
          onClick={() => changeOrderValue(amount, amount + 1)}
        >
          +
        </button>
      </div>
    </ListGroupItem>
  );
};

export default AddOrderCounter;
