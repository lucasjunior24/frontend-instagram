import React from 'react'
import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

function RegisterMainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    <h1>Cadastrar-se</h1>
                    <fieldset>
                        <InputStandart />
                        <InputStandart />
                        <div className='input-field'>
                            <label htmlFor='password'>Senha</label>
                            <input type='password' id='password' placeholder='Senha' />
                        </div>
                    </fieldset>
                    <button>Conectar</button>
                </form>
                <div>Não é cadastrado ainda? <a>Cadastre-se agora!</a></div>
            </div>
        </main>
    )
}

export default RegisterMainSection
