import { Layout, Row, Card } from 'antd'
import React from 'react'
import LoginForm from '../components/loginForm'

const Login: React.FC = () => {
  return (
    <div>
      <Layout>
        <Row justify='center' align='middle' className='h100'>
          <Card>
            <LoginForm />
          </Card>
        </Row>
      </Layout>
    </div>
  )
}

export default Login