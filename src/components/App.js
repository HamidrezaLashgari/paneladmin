import { Layout } from "antd";
import Footer from "./generic/Footer";
import Header from "./generic/Header";
import Sidebar from "./generic/Sidebar";
import '../assets/css/general.css'
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header>Header</Header>
        <Layout>
          <Sidebar />
          <Content className="content">Contentfdsfdsfffffff</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
