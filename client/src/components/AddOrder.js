import React from "react";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { data } from "../inventoryData";
import AddOrderCounter from "./AddOrderCounter";

const AddOrder = () => {
  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup className="mb-3">
            <Label for="exampleEmail">Instagram Name</Label>
            <Input
              type="text"
              name="ig_name"
              id="ig_name"
              placeholder="dvcasse"
              className="rounded-pill hnh-input-border mt-1"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className="mb-3">
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="1234 Main St"
          className="rounded-pill hnh-input-border mt-1"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup className="mb-3">
            <Label for="exampleCity">City</Label>
            <Input
              type="text"
              name="city"
              id="exampleCity"
              placeholder="Lowell"
              className="rounded-pill hnh-input-border mt-1"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="mb-3">
            <Label for="exampleState">State</Label>
            <Input
              type="text"
              name="state"
              id="exampleState"
              className="text-uppercase rounded-pill hnh-input-border mt-1"
              placeholder="MA"
              maxLength={2}
            />
          </FormGroup>
        </Col>
      </Row>

      <div className="bg-light mb-3 p-2 mx-auto rounded-3">
        {data.map((item) => (
          <AddOrderCounter
            key={item.id}
            name={item.name}
            quanity={item.quanity}
            thc={item.thc}
            price={item.price}
          />
        ))}
      </div>

      <div
        className="bg-light rounded-3 mx-auto w-100"
        style={{ minHeight: "70px" }}
      >
        <p className="p-3"> Add products to see lists...</p>
      </div>

      <button
        className="mt-5 btn btn-lg border-0 text-white w-100 mx-auto rounded-pill"
        style={{ backgroundColor: "#f77692" }}
        disabled={true}
      >
        Sign in
      </button>
    </Form>
  );
};

export default AddOrder;
