import React, { useEffect, useState } from 'react'

import api from '../Services/api'

import { AiFillHeart } from 'react-icons/ai'

import ProfileFeed from './ProfileFeed'
import ProfileHeader from './ProfileHeader'

function ProfileContainer() {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    const [userInformations, setUserInformations] = useState({})
    
    useEffect(() => {
        async function getProfileInfo() {
            console.log('oi')
            try {
                const profileInfo = await api.get(`users/${userId}`)
                const { data } = profileInfo
                const userInfo = data.userInfo  
                setUserInformations(userInfo)
            } catch(err) {
                alert('Erro ao carregar os dados')
            }
        }
        getProfileInfo()
    }, [])

    return (
        <main className='profile-container'>
            <ProfileHeader
                username={userInformations.username}
                name={userInformations.name}
                description={userInformations.description}
                site={userInformations.site}
                avatar={userInformations.avatar}
            />
            <ProfileFeed />
        </main>
    )
}

export default ProfileContainer
