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
                        <InputStandart title='Usuário'/>
                        <InputStandart title='Senha' />
                        <InputStandart title='Nome' />
                        <InputStandart title='Descrição' />
                        <InputStandart title='Site' />
                        <InputStandart title='Avatar' />
                    </fieldset>
                    <button>Conectar</button>
                </form>
                <div>Não é cadastrado ainda? <a>Cadastre-se agora!</a></div>
            </div>
        </main>
    )
}

export default RegisterMainSection
