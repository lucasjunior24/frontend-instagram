import React from 'react'

import BottonNavLoggedOut from '../Components/BottonNavLoggedOut'
import HeaderNavLoggedOf from '../Components/HeaderNavLoggedOf'
import LoginMainSection from '../Components/LoginMainSection'

function Login({ updateUserId }) {
    return (
        <>
            <HeaderNavLoggedOf />
            <LoginMainSection updateUserId={updateUserId} />
            <BottonNavLoggedOut />
        </>
    )
}

export default Login
