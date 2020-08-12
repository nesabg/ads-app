import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    color: #7b7b7b;
    display: block;
`
const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    margin: 10px 0;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid grey;
`
const Danger = styled.div`
    margin-top: -3px;
    margin-bottom: 10px;
    color: red;
    font-size: 12px;
    font-style: italic;
`

const TextareaField = ({ value, type, setValue, valid, name }) => {
    
    return (
        <div>
            <Label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)} </Label>
            <Textarea
                value={value}
                type={type}
                onChange={(e) => {
                    setValue(e.target.value)
                   
                }}
                id={name}
                name={name}
        />
        { (value === '') ? null : valid.err ? <Danger>{ valid.message }</Danger> : null}
      </div>
    )
}

export default TextareaField