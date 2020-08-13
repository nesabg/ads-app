import React from 'react'
import styled from 'styled-components'

const FooterEl = styled.footer`
    width: 100%;
    margin-top: 3rem;
    background-color: black;
    padding: 30px 40px;
`

const AnchorTag = styled.a`
    width: 48%;
    color: #61dafb;
    padding: 5px;
    display: inline-block;
    vertical-align: top;
    text-align: ${props => props.left ? "left" : "right"} 
`

const Footer = () => {
    return (
        <FooterEl left>
            <AnchorTag left href="https://github.com/nesabg">My Gihub Profile</AnchorTag>
            <AnchorTag href="https://nesa.bg">My Bussiness website</AnchorTag>
        </FooterEl>
    )
}

export default Footer