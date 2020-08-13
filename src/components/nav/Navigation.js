import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks';
import styled from 'styled-components';

const NavField = styled.nav`
    width: 100%;
    display: inline-block;
    background-color: #61dafb;
    padding: 5px 0;
`

const StyledLink = styled(Link)`
    width: 10%;
    font-size: 20px;
    text-align: center;
    background-color: white;
    color: #61dafb;
    margin: 10px;
    padding: 20px 10px;
    display: inline-block;
`

const Navigation = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <NavField>
            <StyledLink to="/">Free Ads</StyledLink>    
            { isLoggedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </NavField>
    )
}

export default Navigation