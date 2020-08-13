import styled from 'styled-components'

export const Form = styled.form`
    width: 60%;
    margin: 3em 0;
`

export const SubmitButton = styled.button`

    background: ${(props) =>  props.color || '#61dafb'}; ;
    color: white;
    font-size: 1em;
    margin: 1em 0;
    padding: 0.25em 1em;
    border-radius: 3px;
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
        color: white;
        margin: 0 auto;
        padding: 20px 10px;
    }

    li a:hover {
        color: red;
        background-color: white;
    }
`
export const HeadingOne = styled.h1`
    margin: 20px 0;
    font-size: 28px;
`