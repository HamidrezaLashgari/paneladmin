import { Layout, Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  TeamOutlined,
  FormOutlined,
  AlignRightOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
  return (
    <Sider>
      <Menu
        defaultSelectedKeys={["dashboard"]}
        defaultOpenKeys={["persons", "posts"]}
        mode="inline"
      >
        <Menu.Item key="dashboard" icon={<TeamOutlined />}>
          <Link to="/">داشبورد</Link>
        </Menu.Item>

        <SubMenu key="persons" icon={<UserOutlined />} title="مدیریت کاربران">
          <Menu.Item key="person" icon={<TeamOutlined />}>
            <Link to="/persons"> لیست کاربرها</Link>
          </Menu.Item>
          <Menu.Item key="persons/add" icon={<UserAddOutlined />}>
            <Link to="/persons/new"> افزودن کاربر</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="post" icon={<FormOutlined />} title="مدیریت مقاله ها">
          <Menu.Item key="posts" icon={<AlignRightOutlined />}>
            لیست مقاله ها
          </Menu.Item>
          <Menu.Item key="posts/add" icon={<EditOutlined />}>
            افزودن مقاله
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub4" icon={<SettingOutlined />} title="تنظمیات">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <Menu.Item key="logout" icon={<TeamOutlined />}>
          خروج
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
