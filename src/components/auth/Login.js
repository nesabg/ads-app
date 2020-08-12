import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import Input from "./Input"
import validation from '../../utils/validation'
import { useHistory } from "react-router-dom";

const Login = () => {
  //this is a state hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  //this is a context hooks
  const auth = useContext(AuthContext)
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
      <h2>{auth.user.email}</h2>
      <form>
        <Input type="text" value={email} setValue={setEmail} valid={validEmail} name="email" />
        
        <Input type="password" value={password} setValue={setPassword} valid={validPassword} name="password" />

        <button type="submit" disabled={ validEmail.err || validPassword.err } onClick={ handleLogin }>Login</button>
      </form>
    </div>
  );
};

export default Login;