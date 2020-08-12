import styled from 'styled-components'

export const Form = styled.form`
    width: 60%;
    margin: 3em 0;
`

export const SubmitButton = styled.button`

    background: #61dafb;
    color: white;
    font-size: 1em;
    margin: 1em 0;
    padding: 0.25em 1em;
    border: 2px solid #61dafb;
    border-radius: 3px;
`

export const NavUlElement = styled.ul`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    padding: 20px 10px;
    list-style-type: none;

    li a{
        width: 80%;
        color: white;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 100px);
        padding: 20px 10px;
    }

    li a:hover {
        color: red;
        background-color: white;
    }
`

// export const StyledLink = styled(Link)`
//     width: 80%;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: repeat(3, 100px);
//     padding: 20px 10px;
//     list-style-type: none;
// `