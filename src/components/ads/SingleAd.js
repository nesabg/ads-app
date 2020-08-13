import React, { useContext, useEffect } from 'react'
import { useParams, useHistory, Link } from "react-router-dom"
import { AdContext } from '../../contexts/AdContext'
import { AuthContext } from '../../contexts/AuthContext'
import styled from 'styled-components'

const AdWrapper = styled.div`
    display: grid;
    padding: 50px 0;
    grid-template-columns: 2fr 1fr;
    text-align: center;
`

const AdData = styled.div`
    border: 5px solid grey;
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
                <h1>{ currentAd.title }</h1>
                <p>Description: { currentAd.description}</p>
            </AdData>
            <UserData>
                <img src={user.imageUrl} alt='user pic' />
                <p>Author: { currentAd.author}</p>
                <p>Address: { currentAd.address}</p>
            { isAuthor ? (<><button onClick={handleDelete}>Delete ad</button> <Link to={`update/${params.id}`} >Update ad</Link></>) : null }
            </UserData>
        </AdWrapper>
    )
}

export default SingleAd;