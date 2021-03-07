import React from 'react'
import HeroImg from '../Assets/hero-img.png'

function MainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram' src={HeroImg}/>
                <form>
                    <h1>Entrar</h1>
                    <fieldset>
                        <div className='input-field'>
                            <label htmlFor='user'>Usuário</label>
                            <input type='text' id='user' placeholder='Usuário' />
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Senha</label>
                            <input type='password' id='password' placeholder='Senha' />
                        </div>
                    </fieldset>
                    <button>Conectar</button>
                </form>
            </div>
        </main>
    )
}

export default MainSection