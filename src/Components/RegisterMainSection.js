import React, { useState } from 'react'
import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

function RegisterMainSection() {
    const [show, setShow] = useState(1)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [avatar, setAVatar] = useState('')

    function loadFistPage(e) {
        e.preventDefault()
        setShow(1)
    }
    function loadSecondPage(e) {
        e.preventDefault()
        setShow(2)
    }
    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    <h1>Cadastrar-se</h1>
                    {show  === 1?
                    <fieldset>
                        <InputStandart type='text' typeId='user' title='Usuário'/>
                        <InputStandart type='password' typeId='password' title='Senha' />
                        <InputStandart type='text' typeId='name' title='Nome' />
                    </fieldset> :
                    <fieldset>
                        <InputStandart type='text' typeId='Descrição' title='Descrição'/>
                        <InputStandart type='text' typeId='Site' title='Site' />
                        <InputStandart type='text' typeId='Avatar' title='Avatar' />
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
                         {show === 3 ?  
                            <button
                                style={{ background: '#0095f6' }}>Finalizar</button> :
                            <button>Finalizar</button>}
                    </div>
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection
