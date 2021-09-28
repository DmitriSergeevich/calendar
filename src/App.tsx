import { Layout } from 'antd'
import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import './App.css'
import { useActions } from './hooks/useActions'
import { iUser } from './models/iUser'

const App: React.FC = () => {
  const {setUser, setIsAuth} = useActions()

  useEffect(()=>{  
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as iUser)
      setIsAuth(true)
    }
  },[])
  

  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
      
    </Layout>
  )
}

export default App