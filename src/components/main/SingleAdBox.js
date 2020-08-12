import React from 'react'
import { Link } from 'react-router-dom'
// import styles from './SingleAdBox.module.css'
import styled from 'styled-components'

const AdWrapper = styled.div`
    width: 25%;
    height: auto;
    border: 1px solid #ddd;
    margin: 5px;
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    &:hover {
       border: 1px solid #61dafb;
    }
    img {
        width: 100%;
        height: 200px;
    }
`

const SingleAdBox = ( { ad } ) => {
    const href = 'add/' + ad.uid;
    return (
        <AdWrapper>
            <Link to={href}>
                <h2>{ad.title}</h2>
                <img src={ad.imageUrl} alt={ad.title}/>
                <p className="author-name">Author: {ad.author}</p>
            </Link>
        </AdWrapper>
    )
}

export default SingleAdBox