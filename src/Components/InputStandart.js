import React from 'react'

function InputStandart({ title, typeId, type, state, setState}) {
    return (
        <div className='input-field'>
            <label htmlFor={typeId}>{title}</label>
            <input type={type} 
                id={typeId} 
                placeholder={`Preencha o campo ${title.toLowerCase()} `}
                value={state} 
                onChange={setState}    
            />
        </div>
    )
}

export default InputStandart
