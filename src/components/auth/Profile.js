import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { AdContext } from '../../contexts/AdContext'
import SingleAdBox from '../main/SingleAdBox'
import { HeadingOne } from '../../utils/elements'
import styled from 'styled-components'

const ProfileInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 60% 38%;
`

const StyledImage = styled.img`
  width: 80%;
  margin: 20px;
`

const Profile = () => {

    const { user } = useContext(AuthContext)
    const { allAds } = useContext(AdContext)
    
    const userAds = allAds.filter( e => e.aid === user.uid)
    const ads = userAds.map( (ad) => <SingleAdBox ad={ad} key={ad.uid} />)

    return (
        <div>
            <HeadingOne>Profile</HeadingOne>
            <ProfileInfoWrapper>
                <div>
                    <p><strong>Name:</strong> { user.name }</p>
                    <p><strong>Description: </strong> { user.description }</p>
                    <p><strong>Email: </strong> { user.email }</p>
                </div>
                <StyledImage src={ user.imageUrl } alt="profile pic" />
            </ProfileInfoWrapper>
            <div>{ ads }</div>            
        </div>
    )   
}

export default Profile