import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Login = () => {
  //this is a state hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(null)
  const [isValidPass, setIsValidPass] = useState(null)

  //this is a context hooks
  const auth = useContext(AuthContext)
  const { login } = useContext(AuthContext)

  //handle login function
  const handleLogin = (e) => {
    e.preventDefault()
    login( {email, password, name: 'tosho'} )
    setEmail('')
    setPassword('')
  }
  // form data validation email field
  const checkEmailData = () => {
    if (email.includes('@')){
      setIsValidEmail(false)
    }else {
      setIsValidEmail(true)
    }
  }
  // form data validation pass field
  const checkPassData = () => {
    if (password.length > 4 && password.length < 17){
      setIsValidPass(false)
    }else {
      setIsValidPass(true)
    }
  }
 
  return (
    <div>
      <h2>{auth.user.email}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address </label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              checkEmailData()
            }}
            onBlur={ checkEmailData }
            placeholder="Email address"
            id="email"
          />
          { isValidEmail ? <div>The email field is not correctly filled</div> : null }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
          value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value)
              checkPassData()
            }}
            onBlur={ checkPassData }
            placeholder="Password"
            id="password"
          />
          { isValidPass ? <div>The password must be between 5 and 16 characters</div> : null }
        </div>
        <button type="submit" disabled={ isValidEmail || isValidPass || isValidEmail === null || isValidPass === null} onClick={ handleLogin }>Login</button>
      </form>
    </div>
  );
};

export default Login;