import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../Services/api' 

import DefaultImg from '../Assets/default.png'
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
           
            {picture ? 
                <img src={picture} alt={description} /> :
                <img src={DefaultImg} alt="Insira uma imagem" />
            }
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
