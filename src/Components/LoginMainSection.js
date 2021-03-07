import React from 'react'
import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

function MainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    <h1>Entrar</h1>
                    <fieldset>
                        <InputStandart type='text' typeId='user' title='Usuário'/>
                        <InputStandart type='password' typeId='password' title='Senha' />
                    </fieldset>
                    <button>Conectar</button>
                </form>
            </div>
        </main>
    )
}

export default MainSection
