import React, { useState }from 'react'

import { useHistory } from 'react-router-dom'

import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

import api from '../Services/api'
import login from '../Utils/login'

function MainSection({ updateUserId }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function loginHandle(e) {
        e.preventDefault()
        setLoading(true)
        try { 
            const response = await api.post('login', {
                username, 
                password
            })

            login(response)

            const { data } = response
            updateUserId(data.data._id)

            history.push('/feed')

        } catch(err) {
            alert('Erro ao fazer login')
            setLoading(false)
        }
    }

    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    {loading ?
                            <h1>Conectando...</h1> :
                        <>
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
                        </>
                    }
                </form>
            </div>
        </main>
    )
}

export default MainSection
