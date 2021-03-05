import React from 'react'
import { MdExitToApp } from 'react-icons/md'

import LogoInstagram from '../Assets/logo.png'

function HeaderNav() {
    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram'/>
                <button>
                    <MdExitToApp />
                </button>
            </nav>
        </header>
    )
}

export default HeaderNav
