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
                        <InputStandart type='text' typeId='user' title='Usuário'/>
                        <InputStandart type='password' typeId='password' title='Senha' />
                        <InputStandart type='text' typeId='name' title='Nome' />
                    </fieldset>
                    <div className='form-navigation'>
                        <button>Voltar</button>
                        <button>Próximo</button>
                    </div>
                </form>
                <div>Não é cadastrado ainda? <a>Cadastre-se agora!</a></div>
            </div>
        </main>
    )
}

export default RegisterMainSection
