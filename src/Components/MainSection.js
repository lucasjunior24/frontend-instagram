import React from 'react'

function MainSection() {
    return (
        <main>
            <div className='form-login-register'>
                <img alt='Logo do Instagram'/>
                <form>
                    <fieldset>
                        <div className='input-field'>
                            <label for='user'>Usuário</label>
                            <input type='text' id='user' placeholder='Usuário' />
                        </div>
                        <div className='input-field'>
                            <label for='password'>Senha</label>
                            <input type='password' id='password' placeholder='Usuário' />
                        </div>
                    </fieldset>
                    <button>Conectar</button>
                </form>
                <div>Não é cadastrado ainda? <a>Cadastre-se agora!</a></div>
            </div>
        </main>
    )
}

export default MainSection
