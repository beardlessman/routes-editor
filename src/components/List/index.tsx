import React, { FC } from "react";
import { IPoint } from "../../store/Point/types";

interface IProps {
  list: IPoint[];
}

const List: FC<IProps> = ({ list }: IProps) => {
  return (
    <>
      {list.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export default List;
