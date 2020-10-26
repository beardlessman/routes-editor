import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { IPoint } from "../../store/Point/PointStore";
import { AutoComplete } from "antd";

interface IProps {
  onSubmit?: (point: IPoint) => void;
}

export const Form: FC<IProps> = ({ onSubmit }: IProps) => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState<IPoint[]>([]);

  const reset = () => {
    setSearch("");
    setOptions([]);
  };

  const onSearch = async (query: string) => {
    if (query.length === 0) {
      reset();
      return;
    }
    let apikey = `7102a877-527d-4ae8-a6a0-c76304fba8e5`;
    let api = `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${query}&apikey=${apikey}`;
    const results = await fetch(api).then((res) => res.json());
    const variants: IPoint[] = results.response.GeoObjectCollection.featureMember.map(
      (v: any) => ({
        value: v.GeoObject.metaDataProperty.GeocoderMetaData.text,
        coords: v.GeoObject.Point.pos.split(" "),
        key: Math.random(),
      })
    );
    setOptions(variants);
  };

  const onSelect = (value: string) => {
    const newPoint: IPoint | undefined = options.find((v) => v.value === value);
    reset();
    newPoint && onSubmit && onSubmit(newPoint);
  };

  const onChange = (data: string) => setSearch(data);

  return (
    <AutoComplete
      value={search}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Введите адрес"
      allowClear
      autoFocus
    />
  );
};

export default observer(Form);
