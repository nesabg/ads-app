import React from 'react'
import { Link } from 'react-router-dom'

const SingleAdBox = ( { ad } ) => {
    const href = 'add/' + ad.uid;
    return (
        <div className="ad-box">
            <Link to={href}>
                <h2>{ad.title}</h2>
                <img src={ad.imageUrl} alt={ad.title}/>
                <p className="author-name">Author: {ad.author}</p>
            </Link>
        </div>
    )
}

export default SingleAdBox