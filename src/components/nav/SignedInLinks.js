import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SignedOutLinks.module.css'

const SignedInLinks = () => {
    return (
        <>
            <ul className={styles.navul}>
                <li>
                    <Link to="/">Home</Link>              
                </li>
                <li>
                    <Link to="/create-ad">Create Ad</Link>              
                </li>
                <li>
                    <Link to="/profile">My Profile</Link>              
                </li>
            </ul>
        </>
    )
}

export default SignedInLinks