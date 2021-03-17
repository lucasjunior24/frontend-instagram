import React from 'react'
import BottonNav from '../Components/BottonNav'
import HeaderNav from '../Components/HeaderNav'
import ProfileContainer from '../Components/ProfileContainer'

function Profile({ clearUserId }) {
    return (
        <>
            <HeaderNav clearUserId={clearUserId} />
            <ProfileContainer />
            <BottonNav />
        </>
    )
}

export default Profile
