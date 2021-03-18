import React from 'react'
import InputStandart from '../Components/InputStandart'

function PostContainer() {
    return (
        <main className='post-container'>
            <img src='https://th.bing.com/th/id/OIP.EZrn_SyHP3i578RpQLWXSQHaFj?pid=ImgDet&rs=1' alt='' />
            <div>
                <InputStandart 
                    title='Usuario'
                    type='text'
                    state=''
                    setState={() => {}}
                />
                <button>Postar Imagem</button>
            </div>
        </main>
    )
}

export default PostContainer
