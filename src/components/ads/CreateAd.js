import React, {useState, useContext} from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import { AdContext } from "../../contexts/AdContext"
import Input from "../auth/Input"
import  { validation }  from '../../utils/validations'
import { useHistory } from 'react-router-dom'
import { Form, HeadingOne, SubmitButton } from '../../utils/elements'
import TextareaField from '../auth/TextareaField'

const CreateAds = () => {
      //this is a state hooks
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [imageUrl, setImgUrl] = useState('')
      const [address, setAddress] = useState('')
      const [price, setPrice] = useState('')

      const history = useHistory();

        //this is a context hooks
        const auth = useContext(AuthContext)
        const { createAd } = useContext(AdContext)

        //handle register function
        const handleRegister = (e) => {
            e.preventDefault()
            createAd( { title, address, description, imageUrl, auth, price } ).then( res => {
                history.push('/')
            })
        }

        const validTitle = validation('name', title, 'Title must be between 3 and 20 chars')
        const validDescription = validation('description', description, 'Description must be between 32 and 2000 chars')
        const validImage = validation('image', imageUrl, 'Image url is not valid')
        const validAddress = validation('description', address, 'Address must be between 32 and 2000 chars')
        const validPrice = validation('price', price, 'Price must be positive number')

        console.log(price, typeof price)
    return (
        <div>
            <HeadingOne>Create a ad</HeadingOne>
            <Form>
                <Input type="text" value={title} setValue={setTitle} valid={validTitle} name="title" />

                <TextareaField value={description} setValue={setDescription} valid={validDescription} name="description" />

                <Input type="text" value={imageUrl} setValue={setImgUrl} valid={validImage} name="image url" />

                <Input type="text" value={address} setValue={setAddress} valid={validAddress} name="address" />

                <Input type="number" value={price} setValue={setPrice} valid={validPrice} name="price" />
                
            <SubmitButton type="submit" disabled={ validTitle.err || validAddress.err || validImage.err || validPrice.err || validDescription.err } onClick={ handleRegister }>Create ad</SubmitButton>
            </Form>
      </div>
    )
}

export default CreateAds