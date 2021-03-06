import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import api from '../Services/api'
import login from '../Utils/login'

import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

function RegisterMainSection({ updateUserId }) {
    const [show, setShow] = useState(1)

    const history = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [avatar, setAvatar] = useState('')

    const [loading, setLoading] = useState(false)

    function loadFistPage(e) {
        e.preventDefault()
        setShow(1)
    }
    function loadSecondPage(e) {
        e.preventDefault()
        setShow(2)
    }
    async function registrationHandle(e) {
        e.preventDefault()
        setLoading(true)
        try { 
            const response = await api.post('users', {
                username, password, name, description, site, avatar
            })
            alert('Usuário cadastrado com sucesso!')
            
            login(response)

            const { data } = response
            updateUserId(data.data._id)

            history.push('/feed')
         } catch(err) {
            alert('Erro ao tentar cadastrar o usuário, tente novamente|')
            setLoading(false)
        }
    }
    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    {loading ? 
                        <h1>Criando usuário...</h1>
                    :
                        <>
                            <h1>Cadastrar-se</h1>
                            {show  === 1?
                            <fieldset>
                                <InputStandart 
                                    state={username} 
                                    setState={e => setUsername(e.target.value)} 
                                    type='text' 
                                    typeId='username' 
                                    title='Usuário'/>
                                <InputStandart 
                                    state={password} 
                                    setState={e => setPassword(e.target.value)}
                                    type='password' 
                                    typeId='password' 
                                    title='Senha' />
                                <InputStandart 
                                    state={name} 
                                    setState={e => setName(e.target.value)}
                                    type='text' 
                                    typeId='name' 
                                    title='Nome' />
                            </fieldset> :
                            <fieldset>
                                <InputStandart 
                                    state={description} 
                                    setState={e => setDescription(e.target.value)}
                                    type='text' 
                                    typeId='Descrição' 
                                    title='Descrição'/>
                                <InputStandart 
                                    state={site} 
                                    setState={e => setSite(e.target.value)}
                                    type='text' 
                                    typeId='Site' 
                                    title='Site' />
                                <InputStandart 
                                    state={avatar} 
                                    setState={e => setAvatar(e.target.value)}
                                    type='text' 
                                    typeId='Avatar' 
                                    title='Avatar' />
                            </fieldset> }
                            <div className='form-navigation'>
                                {show === 1 ?
                                    <button 
                                        style={{ background: '#0095f6' }}
                                        onClick={loadFistPage}>1</button> :
                                    <button onClick={loadFistPage}>1</button>}
                                {show === 2 ?
                                    <button
                                    style={{ background: '#0095f6' }} 
                                        onClick={loadSecondPage}>2</button> :
                                    <button onClick={loadSecondPage}>2</button>}
                                {avatar && site && description && name && password && username &&
                                    <button 
                                        className='submit'
                                        onClick={registrationHandle}
                                    >Finalizar</button>}
                            </div>
                        </>
                    }
                    
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection
