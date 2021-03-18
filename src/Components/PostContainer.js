import React from 'react'
import InputStandart from '../Components/InputStandart'

function PostContainer() {
    return (
        <div className='post-container'>
            <img src='' alt='' />
            <div>
                <InputStandart 
                    title='Usuario'
                    type='text'
                    state=''
                    setState={() => {}}
                />
                <button>Postar Imagem</button>
            </div>
        </div>
    )
}

export default PostContainer
