import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../Services/api' 

import InputStandart from '../Components/InputStandart'

function PostContainer() {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))

    const [picture, setPicture] = useState('') 
    const [description, setDescription] = useState('')
    
    const history = useHistory() 

    async function postImage(e) {
        e.preventDefault()
        const data = { 
            picture, 
            description 
        }
        try { 
            await api.post('posts', data, {
                headers: {
                    user: userId
                }
            })   
            history.push('/feed')
        } catch(err) {
            alert('Erro ao postar foto')
        }
    }
    
    return (
        <main className='post-container'>
            <img src='https://th.bing.com/th/id/OIP.EZrn_SyHP3i578RpQLWXSQHaFj?pid=ImgDet&rs=1' alt='' />
            <form>
                <h1>Postar nova Foto</h1>
                <fieldset>
                    <InputStandart 
                        title='Link da foto'
                        type='text'
                        state={picture}
                        setState={e => setPicture(e.target.value)}
                    />
                    <InputStandart 
                        title='Descrição da foto'
                        type='text'
                        state={description}
                        setState={e => setDescription(e.target.value)}
                    />
                </fieldset>
                <button onClick={postImage}>Postar Imagem</button>
            </form>
        </main>
    )
}

export default PostContainer
