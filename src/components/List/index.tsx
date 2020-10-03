import React, { FC, useState, useContext } from "react";
import { observer } from "mobx-react";
import PointStore, { IPoint } from "../../store/Point/PointStore";
import { nanoid } from "nanoid";

interface IProps {}

const List: FC<IProps> = () => {
  const pointStore = useContext(PointStore);
  const { pointList, createPoint } = pointStore;
  const [newPointTitle, setNewPointTitle] = useState("");

  const handleChangeNewPointTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPointTitle(e.target.value);
  const handleSubmitNewPoint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPoint: IPoint = { id: nanoid(), title: newPointTitle };
    setNewPointTitle("");
    createPoint(newPoint);
  };

  return (
    <>
      <form onSubmit={handleSubmitNewPoint}>
        <input onChange={handleChangeNewPointTitle} value={newPointTitle} />
      </form>
      {pointList.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export default observer(List);
