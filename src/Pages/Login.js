import React from 'react'

import BottonNavLoggedOut from '../Components/BottonNavLoggedOut'
import HeaderNavLoggedOf from '../Components/HeaderNavLoggedOf'
import LoginMainSection from '../Components/LoginMainSection'

function Login() {
    return (
        <>
            <HeaderNavLoggedOf />
            <LoginMainSection />
            <BottonNavLoggedOut />
        </>
    )
}

export default Login
