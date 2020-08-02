import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Register = () => {
  //this is a state hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  //this is a context hooks
  const auth = useContext(AuthContext)
  const { login } = useContext(AuthContext)

  //handle login function
  const handleRegister= (e) => {
    e.preventDefault()
    login( {email, password, name: 'tosho'} )
    setEmail('')
    setPassword('')
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
          value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
          />
        </div>
        <button type="submit" disabled={isDisabled} onClick={ handleRegister }>Register</button>
      </form>
    </div>
  );
};

export default Register;