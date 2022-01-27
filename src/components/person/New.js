import Form, { Text, Select, Checkbox, Submit} from "../utils/Form";

const genderOptions = [
  { label: "مرد", value: "male" },
  { label: "زن", value: "Female" },
];

export default function New() {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Text name="username" label="نام کاربری" placeholder="نام کاربری" />
        <Text name="email" label="ایمیل" placeholder="ایمیل" />

        <Select
          name="Gender"
          label="جنسیت"
          placeholder="لطفا جنسیت خود را مشخص کنید"
          options={genderOptions}
          required
        />

        <Checkbox name="admin" label="مدیر"/>
        <Submit />
      </Form>
    </div>
  );

}
