import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export interface IPoint {
  id: number;
  title: string;
}

class PointStore {
  pointList: IPoint[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createPoint = (point: IPoint) => {
    this.pointList.push(point);
  };
}

export default createContext(new PointStore());
