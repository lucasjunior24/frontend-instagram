import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import ProfileFeed from './ProfileFeed'
import ProfileHeader from './ProfileHeader'

function ProfileContainer() {
    return (
        <main>
            <ProfileHeader />
            <ProfileFeed />
        </main>
    )
}

export default ProfileContainer
