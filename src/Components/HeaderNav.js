import React from 'react'
import { Link } from 'react-router-dom'
import { MdExitToApp } from 'react-icons/md'

import LogoInstagram from '../Assets/logo.png'

function HeaderNav() {
    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram'/>
                <Link to='/' size={50}>
                    <MdExitToApp />
                </Link>
            </nav>
        </header>
    )
}

export default HeaderNav
