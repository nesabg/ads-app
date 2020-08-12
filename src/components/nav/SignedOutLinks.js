import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SignedOutLinks.module.css'

const SignedOutLinks = () => {
    return (
        <>
            <ul className={styles.navul}>
                <li>
                    <Link to="/">Home</Link>              
                </li>
                <li>
                    <Link to="/login">Login</Link>              
                </li>
                <li>
                    <Link to="/register">Register</Link>              
                </li>
                <li>
                    <Link to="/create-ad">Create Ad</Link>              
                </li>
                <li>
                    <Link to="/profile">Profile</Link>              
                </li>
            </ul>
        </>
    )
}

export default SignedOutLinks