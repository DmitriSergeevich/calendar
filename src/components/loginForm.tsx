import React, { useState } from "react"
import { rules } from "../utils/rules";
import { Form, Input, Button } from 'antd';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: React.FC = () => {  
  const {login} = useActions()
  const {isError, isLoading} = useTypedSelector(state=> state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    login(username, password)
  }

  return (
    <Form onFinish={submit}>
      {isError && <div style={{color:'red', fontSize:'16px'}}>{isError}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.require('Пожалуйста введите имя пользователя')]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.require('Пожалуйста введите пароль')]}
      >
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type={'password'}
        />
      </Form.Item>
      <Form.Item      
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Button
          loading={isLoading}
          type="primary"
          htmlType="submit">
           Войти
        </Button>
      </Form.Item>
    </Form>
  )
} 

export default LoginForm