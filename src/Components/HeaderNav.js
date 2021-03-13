import React from 'react'

import { MdExitToApp } from 'react-icons/md'

import LogoInstagram from '../Assets/logo.png'

function HeaderNav({ clearUserId }) {

    function logoutHandler() {
        clearUserId()
        localStorage.clear()
    }

    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram'/>
                <MdExitToApp size={20} onClick={logoutHandler} />
            </nav>
        </header>
    )
}

export default HeaderNav
