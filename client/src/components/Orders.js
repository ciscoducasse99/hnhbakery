import "../app.scss";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import ModalTable from "./ModalTable";
import AddOrder from "./AddOrder";

import { orders } from "../orderjson";

const Orders = () => {
  const [addModal, setAddModal] = useState(false);
  const [modal, setModal] = useState({ open: false, content: null });
  const [nestedModal, setNestedModal] = useState(false);

  const toggleModal = (order) => {
    if (modal.open === true) {
      setModal({ open: false, content: null });
    } else {
      setModal({ open: true, content: order });
    }
  };

  const toggleNestedModal = () => {
    setNestedModal(!nestedModal);
  };

  const closeAllModals = () => {
    setNestedModal(!nestedModal);
    setModal({ open: false, content: null });
  };

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  return (
    <>
      <Modal
        isOpen={addModal}
        toggle={toggleAddModal}
        centered={true}
        size={"sm"}
        className="modal-fullscreen-md-down"
        fade={false}
      >
        <ModalHeader
          style={{ color: "#f77692" }}
          className="shadow-sm pb-3"
          toggle={toggleAddModal}
          close={<i className="fas fa-times" onClick={toggleAddModal} />}
        >
          Add New Order
        </ModalHeader>
        <ModalBody>
          <AddOrder />
        </ModalBody>
      </Modal>
      <div className="hnh-orders mb-4">
        <div className="d-flex justify-content-between align-items-center text-main mb-3 container">
          <h5 className="m-0">Orders</h5>

          <Button
            className="order-add-btn rounded-pill"
            size="sm"
            onClick={setAddModal}
          >
            Add Order
          </Button>
        </div>
        <div className="order-scroller" style={{ overflowX: "hidden" }}>
          <nav className="nav d-flex justify-content-between p-0 pb-3">
            {orders.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mx-2 "
                  onClick={() => toggleModal(item)}
                >
                  <div
                    className="p-3 pb-1 hnh-border"
                    style={{ width: "18rem" }}
                  >
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <h5 className="">IG: {item.ig_name}</h5>
                    </div>
                    <p className="mb-0">{item.location}</p>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <small className="card-text text-truncate">
                        {item.items.map((item, i) => {
                          return (
                            <small key={i}>
                              <span className="hnh-dark-text"> • </span>
                              {item.name}
                            </small>
                          );
                        })}
                      </small>
                      <h6 className="text-muted">${item.cost}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      {modal.open && (
        <Modal
          isOpen={modal.open}
          toggle={toggleModal}
          centered={true}
          size={"lg"}
          fade={false}
          className="modal-fullscreen-md-down modal-lg"
        >
          <ModalHeader
            style={{ color: "#f77692" }}
            className="border-0 pb-0"
            toggle={toggleModal}
            close={<i className="fas fa-times" onClick={toggleModal} />}
          >
            IG Name: {modal.content.ig_name}
          </ModalHeader>
          <ModalBody className="border-0 rounded-3">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h5>{modal.content.location}</h5>
            </div>
            <ModalTable items={modal.content.items} />
          </ModalBody>
          <ModalFooter className="border-0 mb-3">
            <button className="btn rounded-pill w-100 p-2 hnh-button">
              Complete Order
            </button>
            <button
              className="btn rounded-pill w-100 bg-dark text-light p-2"
              onClick={toggleNestedModal}
            >
              Delete Order
            </button>
          </ModalFooter>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNestedModal}
            centered={true}
            size="sm"
            fade={false}
          >
            <ModalBody className="p-3 text-center">
              <h5 className="text-bold">Delete Order?</h5>
              <p className="m-0">
                This won't be able to be undone and it will remove this order
                from the database. Doing so means you won't be able to track
                this order, and the different items that it will affect like
                inventory and profit.
              </p>
            </ModalBody>
            <ModalFooter className="border-0 d-flex flex-row justify-content-between mx-4">
              <button
                className="col-5 btn rounded-pill "
                style={{
                  backgroundColor: "rgb(235, 238, 240)",
                  fontWeight: "800",
                }}
                onClick={toggleNestedModal}
              >
                Cancel
              </button>
              <button
                className="col-5 btn btn-danger rounded-pill"
                style={{
                  fontWeight: "800",
                }}
                onClick={closeAllModals}
              >
                Delete
              </button>
            </ModalFooter>
          </Modal>
        </Modal>
      )}
    </>
  );
};

export default Orders;
