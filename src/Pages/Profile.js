import React from 'react'
import BottonNav from '../Components/BottonNav'
import HeaderNav from '../Components/HeaderNav'
import ProfileContainer from '../Components/ProfileContainer'

function Profile({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId} />
            <ProfileContainer />
            <BottonNav />
        </>
    )
}

export default Profile
