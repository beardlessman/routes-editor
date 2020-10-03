import React from "react";
import "./style.css";
import List from "../List";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__panel">
        <List />
      </div>
      <div className="layout__panel">Map</div>
    </div>
  );
};

export default Layout;
