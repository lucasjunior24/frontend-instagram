import React from 'react'

function InputStandart(props) {
    return (
        <div className='input-field'>
            <label htmlFor='user'>{props.title}</label>
            <input type='text' id='user' placeholder={`Preencha o campo ${props.title.toLowerCase()} `} />
        </div>
    )
}

export default InputStandart
