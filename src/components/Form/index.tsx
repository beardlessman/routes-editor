import React, { FC, useState } from "react";
import { observer } from "mobx-react";
import { IPoint } from "../../store/Point/PointStore";
import { AutoComplete } from "antd";

interface IProps {
  onSubmit?: (point: IPoint | undefined) => void;
  getVariants?: (query: string) => Promise<IPoint[]>;
}

export const Form: FC<IProps> = ({ getVariants, onSubmit }: IProps) => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState<IPoint[]>([]);

  const submitPoint = (point?: IPoint | undefined): void => {
    onSubmit && onSubmit(point);
    setSearch("");
    setOptions([]);
  };

  const onSearch = async (query: string): Promise<void> => {
    const variants =
      query.length > 0 && getVariants ? await getVariants(query) : [];
    setOptions(variants);
  };

  const onSelect = (value: string): void => {
    const newPoint = options.find((v) => v.value === value);
    submitPoint(newPoint);
  };

  const onChange = (data: string): void => setSearch(data);

  return (
    <AutoComplete
      value={search}
      options={options}
      style={{ width: "100%" }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="Введите адрес"
      allowClear
    />
  );
};

export default observer(Form);
