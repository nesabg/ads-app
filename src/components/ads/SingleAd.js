import React, { useContext, useEffect } from 'react'
import { useParams, useHistory, Link } from "react-router-dom";
import { AdContext } from '../../contexts/AdContext';
import { AuthContext } from '../../contexts/AuthContext';

const SingleAd = () => {

    const params = useParams()
    const history = useHistory()
    const { allAds, deleteAd } = useContext(AdContext)
    const currentAd = allAds.find(e => e.uid === params.id) || ''
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if(allAds.length === 0){
            history.push('/')
        }
      },[allAds.length, history]);

    const handleDelete = () => {
        deleteAd(params.id).then(res => {
            history.push('/')
        })
    }

    const isAuthor = user.uid === currentAd.aid

    return (
        <div>
            <h1>{ currentAd.title }</h1>
            <p>Description: { currentAd.description}</p>
            <img src={currentAd.imageUrl} alt="imgAlt" />
            <p>Address: { currentAd.address}</p>
            <p>Author: { currentAd.author}</p>
            { isAuthor ? (<><button onClick={handleDelete}>Delete ad</button> <Link to={`update/${params.id}`} >Update ad</Link></>) : null }

        </div>
    )
}

export default SingleAd;