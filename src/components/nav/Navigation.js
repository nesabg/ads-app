import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks';
import styled from 'styled-components';

const NavField = styled.nav`
    width: 100%;
    background-color: #61dafb;
    padding: 5px 0;
`

const Navigation = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <NavField>
            <Link to="/">Free Ads</Link>    
            { isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </NavField>
    )
}

export default Navigation