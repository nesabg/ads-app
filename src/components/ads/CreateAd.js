import React, {useState, useContext} from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import { AdContext } from "../../contexts/AdContext"
import Input from "../auth/Input"
import validation from '../../utils/validation'

const CreateAds = () => {
      //this is a state hooks
      const [title, setTitle] = useState('')
      const [description, setDescription] = useState('')
      const [imageUrl, setImgUrl] = useState('')
      const [address, setAddress] = useState('')

        //this is a context hooks
        const auth = useContext(AuthContext)
        const { createAd } = useContext(AdContext)
        const ads = useContext(AdContext)

        //handle register function
        const handleRegister = (e) => {
            e.preventDefault()
            createAd( { title, address, description, imageUrl, auth } )
        }

        const validAddress = validation('description', address, 'Address must be between 32 and 2000 chars')
        const validTitle = validation('name', title, 'Title must be between 3 and 20 chars')
        const validDescription = validation('description', description, 'Description must be between 32 and 2000 chars')
        const validImage = validation('image', imageUrl, 'Image url is not valid')

        console.log(ads)
    return (
        <div>
            <h1>Create a ad</h1>
            <form>
                <Input type="text" value={title} setValue={setTitle} valid={validTitle} name="name" />

                <Input type="text" value={description} setValue={setDescription} valid={validDescription} name="description" />

                <Input type="text" value={imageUrl} setValue={setImgUrl} valid={validImage} name="image url" />

                <Input type="text" value={address} setValue={setAddress} valid={validAddress} name="email" />
                
            <button type="submit" disabled={ validTitle.err } onClick={ handleRegister }>Create ad</button>
            </form>
      </div>
    )
}

export default CreateAds