import React from 'react'
import BottonNavLoggedOut from '../Components/BottonNavLoggedOut'
import HeaderNavLoggedOf from '../Components/HeaderNavLoggedOf'
import RegisterMainSection from '../Components/RegisterMainSection'

function Register() {
    return (
        <>
            <HeaderNavLoggedOf />
            <RegisterMainSection />
            <BottonNavLoggedOut />
        </>
    )
}

export default Register
