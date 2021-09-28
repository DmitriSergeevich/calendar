import { Layout, Menu, Row,} from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

const Navbar: React.FC = () => {
  const { logout } = useActions()
  const router = useHistory()
  const { isAuth, user } = useTypedSelector(state=> state.auth)
  return (
    <Layout.Header>
      <Row justify='end'>
        {
          isAuth ?
          <>
            <div style={{ color: 'white', fontSize: '16px' }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={logout}
                key="1"
              >
                LOGOUT
              </Menu.Item>
            </Menu>
          </>

          :
          
          <>            
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => router.push(RouteNames.LOGIN)}
                key="1"
              >
                LOGIN
              </Menu.Item>
            </Menu>
          </>
        }
      </Row>
    </Layout.Header>
    

  )
}

export default Navbar

