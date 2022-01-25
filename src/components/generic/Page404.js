import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="صفحه‌ی مورد نظر شما وجود ندارد."
      extra={
        <Button type="primary">
            <Link to='/'>بازگشت به خانه</Link>
        </Button>
      }
    />
  );
}
