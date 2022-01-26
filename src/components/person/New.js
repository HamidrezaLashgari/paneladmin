import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {Text, Select} from "../utils/Field";


const genderOptions = [
    {label: 'مرد', value: 'male'},
    {label: 'زن', value: 'Female'},
]

export default function New() {
  function submit(values) {
    console.log(values);
  }

  return (
    <div>
      <Form onFinish={submit}>
          <Text  name="username" label="نام کاربری" placeholder="نام کاربری"/>
          <Text  name="email" label="ایمیل" placeholder="ایمیل"/>



        <Select name="Gender" label="جنسیت" placeholder="لطفا جنسیت خود را مشخص کنید"
        options={genderOptions}
        
        />

        <Form.Item name="admin" valuePropName="checked">
          <Checkbox>مدیر</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            ذخیره
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
