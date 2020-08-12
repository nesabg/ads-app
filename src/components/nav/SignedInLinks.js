import React from 'react'
import { Link } from 'react-router-dom'
import { NavUlElement } from '../../utils/elements'

const SignedInLinks = () => {
    return (
        <>
            <NavUlElement>
                <li>
                    <Link to="/">Home</Link>              
                </li>
                <li>
                    <Link to="/create-ad">Create Ad</Link>              
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>              
                </li>
            </NavUlElement>
        </>
    )
}

export default SignedInLinks