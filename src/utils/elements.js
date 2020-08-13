import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    margin: 3em 0;
`

export const SubmitButton = styled.button`

    background: ${(props) =>  props.color || '#61dafb'}; ;
    color: black;
    font-size: 1em;
    margin: 1em 0;
    padding: 10px 30px;
    border: none;
    cursor: pointer;
`

export const NavUlElement = styled.ul`
    width: 70%;
    display: inline-block;
    margin: 0 auto;
    padding: 20px 10px;
    list-style-type: none;

    li {
        display: inline-block;
        width: 10%;
        text-align: center;
    }

    li a{
        width: 80%;
        color: #61dafb;
        margin: 0 auto;
        padding: 20px 10px;
    }

    li a:hover {
        color: #61dafb;
        background-color: white;
    }
`
export const HeadingOne = styled.h1`
    margin: 20px 0;
    font-size: 28px;
`