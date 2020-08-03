import React from 'react'

const Input = ({ value, type, setValue, valid, name }) => {
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)} </label>
            <input
                value={value}
                type={type}
                onChange={(e) => {
                    setValue(e.target.value)
                   
                }}
                id={name}
                name={name}
        />
        { (value === '') ? null : valid.err ? <div>{ valid.message }</div> : null}
      </div>
    )
}

export default Input