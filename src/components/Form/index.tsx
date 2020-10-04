import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { IPointForm } from "../../store/Point/PointStore";

interface IProps {
  onSubmit?: (point: IPointForm) => void;
}

export const Form: FC<IProps> = ({ onSubmit }: IProps) => {
  const [newPointTitle, setNewPointTitle] = useState("");

  const handleChangeNewPointTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPointTitle(e.target.value);

  const handleSubmitNewPoint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPoint: IPointForm = { title: newPointTitle };
    setNewPointTitle("");
    onSubmit && onSubmit(newPoint);
  };

  return (
    <>
      <form onSubmit={handleSubmitNewPoint}>
        <input onChange={handleChangeNewPointTitle} value={newPointTitle} />
      </form>
    </>
  );
};

export default observer(Form);
