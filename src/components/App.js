import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'

import Footer from './generic/Footer'
import Header from './generic/Header'
import Sidebar from './generic/Sidebar'
import Dashboard from './generic/Dashboard'
import Page404 from './generic/Page404'
import PersonRouter from './person/Router'
import PostRouter from './post/Router'
import 'assets/css/general.css'

const { Content } = Layout

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Header>Header</Header>
        <Layout>
          <Sidebar />
          <Content className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="persons/*" element={<PersonRouter />} />
              <Route path="posts/*" element={<PostRouter />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default App
