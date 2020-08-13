import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { NavUlElement } from '../../utils/elements'
import { AuthContext } from '../../contexts/AuthContext'

const SignedInLinks = () => {

    const history = useHistory();
    const { logout } = useContext(AuthContext)

    const logoutHandler = () => {
        logout().then( res => {
            history.push('/')
        })
    }

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
                <li>
                    <Link onClick={ logoutHandler } >Logout</Link>              
                </li>
            </NavUlElement>
        </>
    )
}

export default SignedInLinks