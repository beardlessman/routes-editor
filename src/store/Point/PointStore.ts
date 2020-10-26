import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export interface IPoint {
  value: string;
  coords: number[];
  key: number;
}

export class PointStore {
  pointList: IPoint[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createPoint = (point: IPoint) => {
    this.pointList.push(point);
  };
}

export default createContext(new PointStore());
