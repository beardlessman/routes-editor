import React, { useContext } from "react";
import "./style.css";
import List from "../List";
import Form from "../Form";
import PointStore from "../../store/Point/PointStore";
import Map from "../Map";

const Layout = () => {
  const store = useContext(PointStore);
  return (
    <div className="layout">
      <div className="layout__panel">
        <Form onSubmit={store.createPoint} getVariants={store.getVariants} />
        <List />
      </div>
      <div className="layout__panel">
        <Map />
      </div>
    </div>
  );
};

export default Layout;
