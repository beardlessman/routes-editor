import React, { FC, useContext, useEffect } from "react";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  ZoomControl,
} from "react-yandex-maps";
import { observer } from "mobx-react";
import PointStore from "../../store/Point/PointStore";

const PointsMap: FC = () => {
  const pointStore = useContext(PointStore);
  const { pointList } = pointStore;

  const initialCenter = [0, 0];

  useEffect(() => {
    pointStore.setCurrentPointCenter(initialCenter);
  });

  const onBoundsChange = (e: any) => {
    pointStore.setCurrentPointCenter(e.get("target").getCenter());
  };

  return (
    <YMaps>
      <Map
        defaultState={{ center: initialCenter, zoom: 2 }}
        style={{ width: "100%", height: "100%" }}
        onBoundsChange={onBoundsChange}
      >
        <ZoomControl options={{ float: "right" }} />
        <Clusterer>
          {pointList.map(({ coords, key, value }) => (
            <Placemark
              key={key}
              geometry={coords}
              properties={{
                balloonContent: value,
              }}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            />
          ))}
        </Clusterer>
      </Map>
    </YMaps>
  );
};

export default observer(PointsMap);
