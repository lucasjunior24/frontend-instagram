import React from 'react'
import { Link } from 'react-router-dom'

function BottonNavLoggedOutLogin() {
    return (
        <footer>
            <nav>
                <div>
                    <p>Já possuo uma conta</p>
                    <Link to='/register'>Entrar!</Link>
                </div>
            </nav>
        </footer>
    )
}

export default BottonNavLoggedOutLogin
