import React from 'react'

import { AiFillHeart } from 'react-icons/ai'

function ProfileFeed({ userposts }) {
    return (
        <>
            <div className='profile-pics'>
                {userposts.map(post => (
                    <div 
                        className='profile-pic'
                        key={post._id}>
                        <img src={post.picture} alt='avatar' />
                    </div>
                ))}
            </div>
        </>
    )
}
{/* <div className='profile-details'>
                        < AiFillHeart />
                        <p>50 Likes</p>
                    </div> */}
export default ProfileFeed
