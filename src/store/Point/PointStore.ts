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

  createPoint = (point: IPoint | undefined) => {
    point && this.pointList.push(point);
  };

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
