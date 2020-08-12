import React from 'react'
import { Link } from 'react-router-dom'
import { NavUlElement } from '../../utils/elements'

const SignedOutLinks = () => {
    return (
        <>
            <NavUlElement>
                <li>
                    <Link to="/">Home</Link>              
                </li>
                <li>
                    <Link to="/login">Login</Link>              
                </li>
                <li>
                    <Link to="/register">Register</Link>              
                </li>
            </NavUlElement>
        </>
    )
}

export default SignedOutLinks