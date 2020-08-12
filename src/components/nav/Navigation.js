import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import SignedOutLinks from './SignedOutLinks'
import styles from './Navigation.module.css'
import SignedInLinks from './SignedInLinks';

const Navigation = () => {
    const { isLoggedIn } = useContext(AuthContext)
    console.log(isLoggedIn);
    return (
        <nav className={styles.navigation}>
            { isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </nav>
    )
}

export default Navigation