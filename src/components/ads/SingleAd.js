import React, { useContext, useEffect } from 'react'
import { useParams, useHistory, Link } from "react-router-dom"
import { AdContext } from '../../contexts/AdContext'
import { AuthContext } from '../../contexts/AuthContext'
import styled from 'styled-components'
import { HeadingOne, SubmitButton } from '../../utils/elements'

const AdWrapper = styled.div`
    display: grid;
    padding: 50px 0;
    grid-template-columns: 2fr 1fr;
    text-align: center;
`

const AdData = styled.div`
    padding: 20px;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        transition: transform .5s ease;
        overflow: hidden
    }
    &:hover img{
        transform: scale(1.05);
    }
`

const UserData = styled.div`
    border-radius: 50%;
    padding: 20px;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        transition: transform .5s ease;
        overflow: hidden;
    }
    &:hover img{
        transform: scale(1.2);
    }
`

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
        <AdWrapper>
            <AdData>
                <img src={currentAd.imageUrl} alt="imgAlt" />
                <HeadingOne>{ currentAd.title }</HeadingOne>
                <p><strong>Description:</strong> { currentAd.description}</p>
                <p><strong>Price:</strong> { currentAd.price}</p>
            </AdData>
            <UserData>
                <img src={currentAd.aimg} alt='user pic' />
                <p><strong>Author:</strong> { currentAd.author}</p>
                <p><strong>Address:</strong> { currentAd.address}</p>
            { isAuthor ? (<><SubmitButton color="red" onClick={handleDelete}>Delete ad</SubmitButton> <Link to={`update/${params.id}`} ><SubmitButton>Update ad</SubmitButton></Link></>) : null }
            </UserData>
        </AdWrapper>
    )
}

export default SingleAd;