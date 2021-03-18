import React from 'react'
import InputStandart from '../Components/InputStandart'

function PostContainer() {
    return (
        <main className='post-container'>
            <img src='https://th.bing.com/th/id/OIP.EZrn_SyHP3i578RpQLWXSQHaFj?pid=ImgDet&rs=1' alt='' />
            <form>
                <h1>Postar nova Foto</h1>
                <fieldset>
                    <InputStandart 
                        title='Usuario'
                        type='text'
                        state=''
                        setState={() => {}}
                    />
                </fieldset>
                <button>Postar Imagem</button>
            </form>
        </main>
    )
}

export default PostContainer
