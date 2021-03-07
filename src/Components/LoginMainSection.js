import React, { useState }from 'react'
import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

function MainSection() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                    <button>Conectar</button>
                </form>
            </div>
        </main>
    )
}

export default MainSection
