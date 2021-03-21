import React, { useState } from 'react'

import api from '../Services/api'

import FillHeart from '../Assets/heart-red.svg'
import OutHeart from '../Assets/heart.svg'

function FeedCard({ picture, description, likes, user, id, interaction }) {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    
    async function likeAPost() {
        
        try {
            await api.post(`posts/${id}/like`, null, {
                headers: {
                    user_id: userId
                }
            })
            interaction()
            alert('gostou')
        } catch(err) {
            alert('Nãp foi possivel dar like')
        }
    } 
    async function unlikeAPost() {

        try {
            await api.post(`posts/${id}/dislike`, null, {
                headers: {
                    user_id: userId
                }
            })
            interaction()
            alert('deslike')
        } catch(err) {
            alert('Nãp foi possivel dar deslike')
        }
    }

    return (
        <div className='card-container'>
            <div className='card-header'>
                <img 
                    src={user.avatar} 
                    alt={user.description}
                   />
                <h2>{user.name}</h2>
            </div>
            <div className='card-photo'>
                <img 
                    src={picture} 
                    alt={description} />
            </div>
            <div className='card-footer'>
                <div className='card-metadata'>
                    {likes.includes(userId) ? 
                        <img 
                            src={FillHeart} 
                            alt='Likes'
                            onClick={() => {unlikeAPost()}} 
                        /> : 
                        <img 
                            src={OutHeart} 
                            alt='Likes'
                            onClick={() => {likeAPost()}}
                            />
                    }
                    
                    {likes.length > 1 ? 
                        <h3>{likes.length} pessoas gostaram</h3> : likes.length === 1 ?
                        <h3>1 pessoa gostou</h3> : null  
                    }
                </div>
                <div className='card-info'>
                    <p><a href='/feed' >{user.name}</a> {description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
