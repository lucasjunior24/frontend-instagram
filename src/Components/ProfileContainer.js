import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import ProfileFeed from './ProfileFeed'
import ProfileHeader from './ProfileHeader'

function ProfileContainer() {
    return (
        <main className='profile-container'>
            <ProfileHeader />
            <ProfileFeed />
        </main>
    )
}

export default ProfileContainer
