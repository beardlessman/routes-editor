import React, { useContext } from "react";
import "./style.css";
import List from "../List";
import NewPointForm from "../NewPointForm";
import PointStore from "../../store/Point/PointStore";
import Map from "../Map";

const Layout = () => {
  const store = useContext(PointStore);
  return (
    <div className="layout">
      <div className="layout__panel">
        <NewPointForm onSubmit={store.createPoint} />
        <List />
      </div>
      <div className="layout__panel">
        <Map />
      </div>
    </div>
  );
};

export default Layout;
