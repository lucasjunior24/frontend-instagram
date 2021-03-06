import React from 'react'
import { Link } from 'react-router-dom'

function BottonNavLoggedOut() {
    return (
        <footer>
            <nav>
                <div>
                    <p>Não tem conta ainda?</p>
                    <Link to='/register'>Increva-se!</Link>
                </div>
            </nav>
        </footer>
    )
}

export default BottonNavLoggedOut
