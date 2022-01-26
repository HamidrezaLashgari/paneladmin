import { Form, Input, Select as AntSelect } from "antd";
import React from "react";

const { Option } = AntSelect;

export function Text({ label, name, placeholder }) {
  return (
    <div>
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: true, message: `فیلد ${name} صحیح نیست` }]}
      >
        <Input placeholder={placeholder} />
      </Form.Item>
    </div>
  );
}

export function Select({ label, name, placeholder, required, options = {} }) {
  return (
    <Form.Item name={name} label={label} rules={[{ required }]}>
      <AntSelect placeholder={placeholder} allowClear>
        {options.map((item) => (
          <Option key={item.value} value={item.value}>{item.label}</Option>
        ))}
      </AntSelect>
    </Form.Item>
  );
}
