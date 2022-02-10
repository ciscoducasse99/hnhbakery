import "./app.scss";
import "./App.css";
import React, { useEffect } from "react";
import Div100vh from "react-div-100vh";

import DropwdownBtn from "./components/DropdownBtn";
import Orders from "./components/Orders";
import InfoHeader from "./components/InfoHeader";
import PurchaseList from "./components/PurchaseList";
import Inventory from "./components/Inventory";
import PieChart from "./components/Piechart";

function App() {
  useEffect(() => {
    document.title = "H3nny n Honey";
  });
  return (
    <Div100vh>
      <div className="container pt-3">
        <DropwdownBtn />
        <InfoHeader />
        <PieChart />
        <Orders />
        <Inventory />
        <PurchaseList />
      </div>
    </Div100vh>
  );
}

export default App;
