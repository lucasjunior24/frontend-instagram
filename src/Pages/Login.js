import React from 'react'

import BottonNavLoggedOut from '../Components/BottonNavLoggedOut'
import HeaderNavLoggedOf from '../Components/HeaderNavLoggedOf'
import MainSection from '../Components/MainSection'

function Login() {
    return (
        <>
            <HeaderNavLoggedOf />
            <MainSection />
            <BottonNavLoggedOut />
        </>
    )
}

export default Login
