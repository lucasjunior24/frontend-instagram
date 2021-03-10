import React, { useState }from 'react'

import { useHistory } from 'react-router-dom'

import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

import api from '../Services/api'

function MainSection() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function loginHandle(e) {
        e.preventDefault()
        try { 
            const response = await api.post('login', {
                username, 
                password
            })
            const { data } = response.data

            const userId = data._id
            const userName = data.username

            localStorage.setItem('InstagramUserId', userId)
            localStorage.setItem('InstagramUserName', userName)

            history.push('/feed')

        } catch(err) {
            alert('Erro ao fazer login')
        }
    }

    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    <h1>Entrar</h1>
                    <fieldset>
                        <InputStandart 
                            state={username} 
                            setState={e => setUsername(e.target.value)}
                            type='text' 
                            typeId='user' 
                            title='Usuário'/>
                        <InputStandart 
                            state={password} 
                            setState={e => setPassword(e.target.value)}
                            type='password' 
                            typeId='password' 
                            title='Senha' />
                    </fieldset>
                    <button onClick={loginHandle}>Conectar</button>
                </form>
            </div>
        </main>
    )
}

export default MainSection
