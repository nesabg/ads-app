import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { AdContext } from '../../contexts/AdContext'
import SingleAdBox from '../main/SingleAdBox'

const Profile = () => {

    const { user } = useContext(AuthContext)
    const { allAds } = useContext(AdContext)
    
    const userAds = allAds.filter( e => e.aid === user.uid)
    const ads = userAds.map( (ad) => <SingleAdBox ad={ad} key={ad.uid} />)

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: { user.name }</p>
            <p>Description: { user.description }</p>
            <p>Email: { user.email }</p>
            <img src={ user.imageUrl } alt="profile pic" />
            <div>{ ads }</div>            
        </div>
    )   
}

export default Profile