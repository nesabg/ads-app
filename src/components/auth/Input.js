import React from 'react'
import s from './Input.module.css'

const Input = ({ value, type, setValue, valid, name }) => {
    
    return (
        <div className={s.formGroup}>
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