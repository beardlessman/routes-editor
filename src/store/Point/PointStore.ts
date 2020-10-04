import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export interface IPointForm {
  title: string;
}

export interface IPoint extends IPointForm {
  id: number;
}

export class PointStore {
  pointList: IPoint[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createPoint = (pointForm: IPointForm) => {
    const point = { ...pointForm, id: Math.random() };
    this.pointList.push(point);
  };
}

export default createContext(new PointStore());
