import React, { useState, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import Input from "./Input"
import TextareaField from "./TextareaField"
import { validation } from '../../utils/validations'
import { Form, SubmitButton } from '../../utils/elements'

const Register = () => {
  //this is a state hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImgUrl] = useState('')

  //this is a context hooks
  const auth = useContext(AuthContext)
  const { register } = useContext(AuthContext)

  //handle register function
  const handleRegister = (e) => {
    e.preventDefault()
    register( {email, password, name, description, imageUrl} )
    setEmail('')
    setPassword('')
  }

const validEmail = validation('email', email, 'Email is not valid')
const validPassword = validation('password', password, 'Password must be between 6 and 16 chars')
const validName = validation('name', name, 'Name must be between 3 and 20 chars')
const validDescription = validation('description', description, 'Description must be between 32 and 2000 chars')
const validImage = validation('image', imageUrl, 'Image url is not valid')

  return (
    <div>
      <h2>{auth.user.email}</h2>
      <Form>
        <Input type="text" value={name} setValue={setName} valid={validName} name="name" />

        <TextareaField value={description} setValue={setDescription} valid={validDescription} name="description" />

        <Input type="text" value={imageUrl} setValue={setImgUrl} valid={validImage} name="image url" />

        <Input type="text" value={email} setValue={setEmail} valid={validEmail} name="email" />
        
        <Input type="password" value={password} setValue={setPassword} valid={validPassword} name="password" />

        <SubmitButton type="submit" disabled={ validEmail.err || validPassword.err } onClick={ handleRegister }>Register</SubmitButton>
      </Form>
    </div>
  );
};

export default Register;