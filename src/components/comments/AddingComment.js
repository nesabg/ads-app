import React, { useState, useContext } from 'react'
import TextareaField from '../auth/TextareaField'
import { SubmitButton } from '../../utils/elements'
import { validation } from '../../utils/validations'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { AdContext } from '../../contexts/AdContext'
import styled from 'styled-components'

const AddCommentWrapper = styled.div`
    border-top: 1px solid #d8d8d8;
    margin-top: 30px;
    padding: 15px;
`


const AddingComments = () => {
    const [message, setMessage] = useState('')
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const { addComment } = useContext(AdContext)

    const handleSubmit = () => {
        let data = {
            name: user.name,
            comment: message,
            dateCreate: Date.now()
          };
          addComment(data, id).then( res => {
            setMessage('')
          })
    }

    console.log(id)
    const validMessage = validation('message', message, 'Message must be between 16 and 100 chars')
    return (
        <AddCommentWrapper>
            <TextareaField value={message} setValue={setMessage} valid={validMessage} name="Seng a comment to this ad" />
            <SubmitButton onClick={ handleSubmit }>Submit comment</SubmitButton>
        </AddCommentWrapper>
    )
}

export default AddingComments