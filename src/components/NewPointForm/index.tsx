import React, { FC } from "react";
import { Form, Input } from "antd";

interface IProps {
  onSubmit: (name: string) => void;
}

export const NewPointForm: FC<IProps> = ({ onSubmit }: IProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: { name: string }): void => {
    onSubmit(values.name);
    form.resetFields();
  };

  return (
    <Form form={form} name="new-point-form" onFinish={onFinish}>
      <Form.Item name="name">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default NewPointForm;
