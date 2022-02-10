import React from "react";

const InfoHeader = () => {
  return (
    <div
      className="container mx-auto p-2 row mt-3 text-center hnh-border"
      style={{ borderRadius: "12px" }}
    >
      <div className="col">
        <h2 className="m-0">54</h2>
        <small>Sold Orders</small>
      </div>
      <div className="col">
        <h2 className="m-0">647.59</h2>
        <small>Revenue</small>
      </div>
      <div className="col">
        <h2 className="m-0">304.52</h2>
        <small>Profit</small>
      </div>
    </div>
  );
};

export default InfoHeader;
