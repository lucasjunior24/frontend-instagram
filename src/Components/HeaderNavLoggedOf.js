import React from 'react'

import LogoInstagram from '../Assets/logo.png'

function HeaderNavLoggedOf() {
    return (
        <header>
            <nav className='nav-loggedout'>
                <img src={LogoInstagram} alt='Logo do Instagram'/>
            </nav>
        </header>
    
    )
}

export default HeaderNavLoggedOf
