import React from 'react'
import BottonNavLoggedOutLogin from '../Components/BottonNavLoggedOutLogin'
import HeaderNavLoggedOf from '../Components/HeaderNavLoggedOf'
import RegisterMainSection from '../Components/RegisterMainSection'

function Register({ updateUserId }) {
    return (
        <>
            <HeaderNavLoggedOf />
            <RegisterMainSection updateUserId={updateUserId} />
            <BottonNavLoggedOutLogin />
        </>
    )
}

export default Register
