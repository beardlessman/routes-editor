import { makeAutoObservable } from "mobx";
import { createContext } from "react";

export interface IPoint {
  value: string;
  coords: number[];
  key: number;
}

export class PointStore {
  pointList: IPoint[] = [];
  currentPointCenter: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPointCenter = (newCenter: number[]) => {
    this.currentPointCenter = newCenter;
  };

  createPoint = (name: string) => {
    this.pointList.push({
      value: name,
      coords: this.currentPointCenter,
      key: Math.random(),
    });
  };

  dragItem = (startIndex: number, endIndex: number): void => {
    const list = [...this.pointList];
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    this.pointList = list;
  }

  getVariants = async (query: string): Promise<IPoint[]> => {
    let apikey = `7102a877-527d-4ae8-a6a0-c76304fba8e5`;
    let api = `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${query}&apikey=${apikey}`;
    const results = await fetch(api).then((res) => res.json());
    return results.response.GeoObjectCollection.featureMember.map((v: any) => ({
      value: v.GeoObject.metaDataProperty.GeocoderMetaData.text,
      coords: v.GeoObject.Point.pos
        .split(" ")
        .reverse()
        .map((i: string) => parseFloat(i)),
      key: Math.random(),
    }));
  };
}

export default createContext(new PointStore());
