import React from 'react'
import { SubmitButton } from '../../utils/elements'
import { Link } from 'react-router-dom'
import { HeadingOne } from '../../utils/elements'

const NoMatch = () => {

    return(
        <>
          <HeadingOne>Ooops 404 Not Found Page</HeadingOne>  
          <p>It`s look like you search something that missing</p>
          <Link to="/"><SubmitButton>Go to the home page</SubmitButton></Link>
        </>
    )
}

export default NoMatch