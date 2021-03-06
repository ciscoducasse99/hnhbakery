import React from "react";
import { Table, Card, CardHeader } from "reactstrap";
import "../app.scss";

const PurchaseList = () => {
  return (
    <div className="pb-5">
      <Card className="shadow-sm mt-3 hnh-card mb-5">
        <CardHeader className="hnh-card-header d-flex justify-content-between items-center">
          <span>Purchase List</span>
          <i className="fa fa-plus" />
        </CardHeader>
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
              <th scope="row">Flour</th>
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
    </div>
  );
};

export default PurchaseList;
