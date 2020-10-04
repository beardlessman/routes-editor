import React, { FC, useContext } from "react";
import { observer } from "mobx-react";
import PointStore from "../../store/Point/PointStore";

const List: FC<{}> = () => {
  const pointStore = useContext(PointStore);
  const { pointList } = pointStore;

  return (
    <>
      {pointList.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export default observer(List);
