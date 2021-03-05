import React from 'react'

import LogoInstagram from '../Assets/logo.png'

function HeaderNav() {
    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram'/>
                <button>
                    Sair
                </button>
            </nav>
        </header>
    )
}

export default HeaderNav
