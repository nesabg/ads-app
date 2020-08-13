import React from 'react'
import { SubmitButton } from '../../utils/elements'
import { Link } from 'react-router-dom'

const NoMatch = () => {

    return(
        <>
          <h1>Ooops 404 Not Found Page</h1>  
          <p>It`s look like you search something that missing</p>
          <Link to="/"><SubmitButton>Go to the home page</SubmitButton></Link>
        </>
    )
}

export default NoMatch