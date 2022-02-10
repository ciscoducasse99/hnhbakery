import "../app.scss";

import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownBtn = () => {
  const [dropdownOpen, setDropdown] = useState(false);
  const toggle = () => {
    setDropdown(!dropdownOpen);
  };
  return (
    <div className="d-flex justify-content-between align-items-center flex-row">
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        size="sm"
        className="rounded-pill"
      >
        <DropdownToggle className="hnh-button rounded-pill px-3">
          Actions
        </DropdownToggle>
        <DropdownMenu className="shadow-lg">
          <DropdownItem header>Batches</DropdownItem>
          <DropdownItem>Create New Batch</DropdownItem>
          <DropdownItem>View Previous Batches</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Track All Statistics</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <h6 className="m-0 hnh-dark-text"> Batch from 02/21/2021 </h6>
    </div>
  );
};

export default DropdownBtn;
