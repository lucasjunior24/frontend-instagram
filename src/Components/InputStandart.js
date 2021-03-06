import React from 'react'

function InputStandart({ title, typeId, type}) {
    return (
        <div className='input-field'>
            <label htmlFor={typeId}>{title}</label>
            <input type={type} id={typeId} placeholder={`Preencha o campo ${title.toLowerCase()} `} />
        </div>
    )
}

export default InputStandart
