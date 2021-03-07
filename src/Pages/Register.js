import React from 'react'
import BottonNavLoggedOutLogin from '../Components/BottonNavLoggedOutLogin'
import HeaderNavLoggedOf from '../Components/HeaderNavLoggedOf'
import RegisterMainSection from '../Components/RegisterMainSection'

function Register() {
    return (
        <>
            <HeaderNavLoggedOf />
            <RegisterMainSection />
            <BottonNavLoggedOutLogin />
        </>
    )
}

export default Register
