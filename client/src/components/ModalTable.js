import React from "react";

const ModalTable = ({ items }) => {
  return (
    <table className="table table-bordered table-striped table-hover mt-3">
      <thead>
        <tr style={{ color: "#f77692" }}>
          <th>Item</th>
          <th>Quanity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <th scope="row">{item.name}</th>
            <td>{item.quanity}</td>

            <td>${item.price}</td>
            <td>${item.price * item.quanity}</td>
          </tr>
        ))}

        <tr>
          <th colSpan="3" scope="row" style={{ color: "#f77692" }}>
            Grand Total
          </th>

          <td style={{ color: "#f77692" }}>
            $
            {items.reduce((acc, obj) => {
              return acc + obj.price * obj.quanity;
            }, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ModalTable;
