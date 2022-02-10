import React from "react";
import { Table, Card, CardHeader } from "reactstrap";
import "../app.scss";

const PurchaseList = () => {
  return (
    <>
      <p className="text-muted text-center mb-0 pb-0">
        {" "}
        Make 'Purchase List' section feel better
      </p>
      <Card className="shadow-sm mt-3 hnh-card mb-5">
        <CardHeader className="hnh-card-header">Purchase List</CardHeader>
        <Table className="m-0">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Weed</th>
              <td>2</td>
              <td>$25</td>
            </tr>
            <tr>
              <th scope="row">Milk</th>
              <td>2</td>
              <td>$25</td>
            </tr>
            <tr>
              <th scope="row">Brownie Mix</th>
              <td>2</td>
              <td>$25</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default PurchaseList;
