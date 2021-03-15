import React from 'react'

import { AiFillHeart } from 'react-icons/ai'

function ProfileFeed() {
    return (
        <div className='profile-pics'>
            <div className='profil-pic'>
                <div className='profile-details'>
                    < AiFillHeart />
                    <p>50 Likes</p>
                    <img src='https://th.bing.com/th/id/OIP.eJHIsU7S8Tx0nDfKQp4Z0AHaEK?w=280&h=180&c=7&o=5&pid=1.7' alt='avatar' />
                </div>
            </div>
            <div className='profil-pic'>
                <div className='profile-details'>
                    < AiFillHeart />
                    <p>50 Likes</p>
                </div>
                <img src='https://th.bing.com/th/id/OIP.eJHIsU7S8Tx0nDfKQp4Z0AHaEK?w=280&h=180&c=7&o=5&pid=1.7' alt='avatar' />
            </div>
            <div className='profil-pic'>
                <div className='profile-details'>
                    < AiFillHeart />
                    <p>50 Likes</p>
                </div>
            </div>
            <img src='https://th.bing.com/th/id/OIP.eJHIsU7S8Tx0nDfKQp4Z0AHaEK?w=280&h=180&c=7&o=5&pid=1.7' alt='avatar' />

        </div>
    )
}

export default ProfileFeed
