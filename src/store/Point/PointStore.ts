import { action, observable } from "mobx";
import { createContext } from "react";

export interface IPoint {
  id: number;
  title: string;
}

class PointStore {
  @observable pointList: IPoint[] = [];

  @action createPoint = (point: IPoint) => {
    this.pointList.push(point);
  };
}

export default createContext(new PointStore());
