import React, { useState } from 'react'
import HeroImg from '../Assets/hero-img.png'
import InputStandart from './InputStandart'

function RegisterMainSection() {
    const [show, setShow] = useState(1)
    
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
                        <button>1</button>
                        <button onClick={loadSecondPage}>2</button>
                        <button>Finalizar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default RegisterMainSection
