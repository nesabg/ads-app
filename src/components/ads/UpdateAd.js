import React, {useState, useContext} from 'react'
import { AuthContext } from "../../contexts/AuthContext"
import { AdContext } from "../../contexts/AdContext"
import Input from "../auth/Input"
import validation from '../../utils/validation'
import styles from './CreateAd.module.css'
import { useHistory, useParams } from 'react-router-dom'

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


    //handle register function
    const handleUpdate = (e) => {
        e.preventDefault()
        updateAd( { title, address, description, imageUrl, auth }, params.id ).then( res => {
            history.push('/add/' + params.id)
        })
    }


    const validAddress = validation('description', address, 'Address must be between 32 and 2000 chars')
    const validTitle = validation('name', title, 'Title must be between 3 and 20 chars')
    const validDescription = validation('description', description, 'Description must be between 32 and 2000 chars')
    const validImage = validation('image', imageUrl, 'Image url is not valid')

    return (
        <div>
            <h1>Update a ad</h1>
            <form>
                <Input className={styles.name} type="text" value={title} setValue={setTitle} valid={validTitle} name="title" />

                <Input type="text" value={description} setValue={setDescription} valid={validDescription} name="description" />

                <Input type="text" value={imageUrl} setValue={setImgUrl} valid={validImage} name="image url" />

                <Input type="text" value={address} setValue={setAddress} valid={validAddress} name="Address" />
                
            <button type="submit" disabled={ validTitle.err } onClick={ handleUpdate }>Update ad</button>
            </form>
      </div>
    )
}

export default UpdateAd