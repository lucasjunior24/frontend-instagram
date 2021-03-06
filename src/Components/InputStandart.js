import React from 'react'

function InputStandart(props) {
    return (
        <div className='input-field'>
            <label htmlFor='user'>{props.title}</label>
            <input type='text' id='user' placeholder='Usuário' />
        </div>
    )
}

export default InputStandart
