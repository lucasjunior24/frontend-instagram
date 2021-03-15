import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

function ProfileContainer() {
    return (
        <main>
            <div className='profile-header'>
                <img className='avatar' src='' alt='avatar' />
                <div className='profile-user-info'>
                    <h1>USERNAME</h1>
                    <h2>Nome do usuairo</h2>
                    <p>Descricao do usuario</p>
                    <p>Site</p>
                </div>
             </div>
            <div className='profile-pics'>
                <div>
                    <div className='profile-details'>
                        < AiFillHeart />
                        <p>50 Likes</p>
                        <img src='https://th.bing.com/th/id/OIP.eJHIsU7S8Tx0nDfKQp4Z0AHaEK?w=280&h=180&c=7&o=5&pid=1.7' alt='avatar' />
                    </div>
                </div>
                <div>
                    <div className='profile-details'>
                        < AiFillHeart />
                        <p>50 Likes</p>
                    </div>
                    <img src='https://th.bing.com/th/id/OIP.eJHIsU7S8Tx0nDfKQp4Z0AHaEK?w=280&h=180&c=7&o=5&pid=1.7' alt='avatar' />
                </div>
                <div>
                    <div className='profile-details'>
                        < AiFillHeart />
                        <p>50 Likes</p>
                    </div>
                </div>
                <img src='https://th.bing.com/th/id/OIP.eJHIsU7S8Tx0nDfKQp4Z0AHaEK?w=280&h=180&c=7&o=5&pid=1.7' alt='avatar' />

            </div>
        </main>
    )
}

export default ProfileContainer
