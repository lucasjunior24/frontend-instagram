import React, { useEffect, useState } from 'react'

import api from '../Services/api'

import { AiFillHeart } from 'react-icons/ai'

import ProfileFeed from './ProfileFeed'
import ProfileHeader from './ProfileHeader'

function ProfileContainer() {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    const [userInformations, setUserInformations] = useState({})
    const [userPosts, setUserPosts] = useState([])
    
    useEffect(() => {
        async function getProfileInfo() {
            try {
                const profileInfo = await api.get(`users/${userId}`)
                const { data } = profileInfo

                const userInfo = data.userInfo  
                setUserInformations(userInfo)

                const userPosts = data.userPost
                setUserPosts(userPosts)
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
            <ProfileFeed 
                userposts={userPosts}
            />
        </main>
    )
}

export default ProfileContainer
