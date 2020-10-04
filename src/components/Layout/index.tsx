import React, { useContext } from "react";
import "./style.css";
import List from "../List";
import Form from "../Form";
import PointStore from "../../store/Point/PointStore";

const Layout = () => {
  const store = useContext(PointStore);
  return (
    <div className="layout">
      <div className="layout__panel">
        <Form onSubmit={store.createPoint} />
        <List />
      </div>
      <div className="layout__panel">Map</div>
    </div>
  );
};

export default Layout;
