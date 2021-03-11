import React from 'react'

import { useHistory } from 'react-router-dom'

import { MdExitToApp } from 'react-icons/md'

import LogoInstagram from '../Assets/logo.png'

function HeaderNav() {

    const history = useHistory()

    function logoutHandler() {
        localStorage.clear()
        history.push('/')
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
