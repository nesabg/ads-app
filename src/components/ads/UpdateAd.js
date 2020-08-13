import React, {useState, useContext} from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import { AdContext } from "../../contexts/AdContext"
import Input from "../auth/Input"
import  {validation } from '../../utils/validations'
import { useHistory, useParams } from 'react-router-dom'
import { Form } from '../../utils/elements'
import TextareaField from '../auth/TextareaField'
import { HeadingOne, SubmitButton } from '../../utils/elements'



const UpdateAd = () => {

    const params = useParams();
    const history = useHistory();
    
    //this is a context hooks
    const auth = useContext(AuthContext)
    const { allAds, updateAd } = useContext(AdContext)
    
    const currentAd = allAds.find(e => e.uid === params.id) || ''

    //this is a state hooks
    const [title, setTitle] = useState(currentAd.title)
    const [description, setDescription] = useState(currentAd.description)
    const [imageUrl, setImgUrl] = useState(currentAd.imageUrl)
    const [address, setAddress] = useState(currentAd.address)
    const [price, setPrice] = useState(currentAd.price)



    //handle register function
    const handleUpdate = (e) => {
        e.preventDefault()
        updateAd( { title, address, description, imageUrl, auth, price }, params.id ).then( res => {
            history.push('/add/' + params.id)
        })
    }


    const validAddress = validation('description', address, 'Address must be between 32 and 2000 chars')
    const validTitle = validation('message', title, 'Title must be between 3 and 20 chars')
    const validDescription = validation('description', description, 'Description must be between 32 and 2000 chars')
    const validImage = validation('image', imageUrl, 'Image url is not valid')
    const validPrice = validation('price', price, 'Price must be positive number')

    return (
        <div>
            <HeadingOne>Update your ad</HeadingOne>
            <Form>
                <Input type="text" value={title} setValue={setTitle} valid={validTitle} name="title" />

                <TextareaField value={description} setValue={setDescription} valid={validDescription} name="description" />

                <Input type="text" value={imageUrl} setValue={setImgUrl} valid={validImage} name="image url" />

                <Input type="text" value={address} setValue={setAddress} valid={validAddress} name="Address" />

                <Input type="number" value={price} setValue={setPrice} valid={validPrice} name="Price" />
                
            <SubmitButton type="submit" disabled={ validTitle.err } onClick={ handleUpdate }>Update ad</SubmitButton>
            </Form>
      </div>
    )
}

export default UpdateAd