import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "../app.scss";

const Percentages = () => {
  return (
    <>
      <h4 className="text-main">Overview</h4>
      <div className="percentages">
        <CircularProgressbar
          style={{ height: "50px" }}
          value={50}
          text={`50%`}
        />
        ;
      </div>
    </>
  );
};

export default Percentages;
