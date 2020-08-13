import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import Input from "./Input"
import { validation } from '../../utils/validations'
import { useHistory, Link } from "react-router-dom";
import { Form, SubmitButton, HeadingOne } from '../../utils/elements'
import styled from 'styled-components'

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 38%;
`

const StyledImage = styled.img`
  width: 100%;
  margin: 20px;
`

const Login = () => {
  //this is a state hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  //this is a context hooks
  const { login } = useContext(AuthContext)

  //handle login function
  const handleLogin = (e) => {
    e.preventDefault()
    login( { email, password } ).then(res => {
      history.push('/');
    })
    setEmail('')
    setPassword('')
  }

const validEmail = validation('email', email, 'Email is not valid')
const validPassword = validation('password', password, 'Password must be between 6 and 16 chars')

  return (
    <div>
      <HeadingOne>Login</HeadingOne>
      <LoginWrapper>
        <Form>
          <Input type="text" value={email} setValue={setEmail} valid={validEmail} name="email" />
          
          <Input type="password" value={password} setValue={setPassword} valid={validPassword} name="password" />

          <SubmitButton type="submit" disabled={ validEmail.err || validPassword.err } onClick={ handleLogin }>Login</SubmitButton>
        </Form>
        <StyledImage src="https://cdn.pixabay.com/photo/2016/02/16/16/57/login-1203603_960_720.png" alt="login"/>
        </LoginWrapper>
      <Link to="/register">Don`t have account? Register now</Link>
    </div>
  );
};

export default Login;