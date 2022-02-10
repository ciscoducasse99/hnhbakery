import React, { useState } from "react";
import InventoryCounter from "./InventoryCounter";
import { data } from "../inventoryData";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Inventory = () => {
  const [dropdownOpen, setDropdown] = useState(false);
  const toggle = () => {
    setDropdown(!dropdownOpen);
  };

  return (
    <div className="hnh-orders container mb-4">
      <div className="d-flex justify-content-between align-items-center text-main mb-3">
        <h5 className="m-0">Inventory</h5>
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="left">
          <DropdownToggle
            tag="i"
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
          >
            <i className="hnh-elli fas fa-ellipsis-v" />
          </DropdownToggle>

          <DropdownMenu className="shadow-lg">
            <DropdownItem header>Inventory</DropdownItem>
            <DropdownItem>Add Products</DropdownItem>
            <DropdownItem>Edit Product</DropdownItem>
            <DropdownItem>Delete Product</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="hnh-border p-2" style={{ borderRadius: "14px" }}>
        {data.map((item) => (
          <InventoryCounter
            key={item.id}
            name={item.name}
            quanity={item.quanity}
            thc={item.thc}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
