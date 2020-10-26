import React, { FC, useContext } from "react";
import { observer } from "mobx-react";
import PointStore from "../../store/Point/PointStore";

const List: FC<{}> = () => {
  const pointStore = useContext(PointStore);
  const { pointList } = pointStore;

  return (
    <>
      {pointList.map(({ key, value, coords }) => (
        <div key={key}>
          {value} [{coords.join(", ")}]
        </div>
      ))}
    </>
  );
};

export default observer(List);
