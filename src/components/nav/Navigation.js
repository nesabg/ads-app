import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import SignedOutLinks from './SignedOutLinks'
import styles from './Navigation.module.css'

const Navigation = () => {
    const auth = useContext(AuthContext)

    return (
        <nav className={styles.navigation}>
            { auth.isLoggedIn ? <SignedOutLinks /> :<SignedOutLinks />}
        </nav>
    )
}

export default Navigation