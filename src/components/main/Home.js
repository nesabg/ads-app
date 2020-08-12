import React, { useContext } from 'react'
import { AdContext } from '../../contexts/AdContext'
import SingleAdBox from './SingleAdBox'
import styled from 'styled-components'

const Title = styled.h1`
    color: black;
    font-size: 30px;
    text-align: center
`

const Home = () => {
    const ads = useContext(AdContext)
    const allAds = ads.allAds.map( (ad) => <SingleAdBox ad={ad} key={ad.uid} />)
    
    return (
        <div className="home">
            <Title>Welcome to our free classifieds app</Title>
            { ads.allAds.length === 0 ? <div>Loading...</div> : <div>{ allAds }</div>}
        </div>
    )
}

export default Home


