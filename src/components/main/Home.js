import React, { useContext } from 'react'
import { AdContext } from '../../contexts/AdContext'
import SingleAdBox from './SingleAdBox'
import { HeadingOne } from '../../utils/elements'


const Home = () => {
    const ads = useContext(AdContext)
    const allAds = ads.allAds.map( (ad) => <SingleAdBox ad={ad} key={ad.uid} />)
    
    return (
        <div>
            <HeadingOne>Welcome to our free classifieds app</HeadingOne>
            { ads.allAds.length === 0 ? <div>Loading...</div> : <div>{ allAds }</div>}
        </div>
    )
}

export default Home


