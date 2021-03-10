import React from 'react'

import FillHeart from '../Assets/heart-red.svg'
import OutHeart from '../Assets/heart.svg'

function FeedCard({ picture, description, likes }) {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <img src='https://avatars.githubusercontent.com/u/53240060?s=460&u=1b76a884bd6514d9c0d3eb42976bb9bc820b7ca1&v=4' alt='Foto de perfil' />
                <h2>Perfil do Usuário</h2>
            </div>
            <div className='card-photo'>
                <img 
                    src={picture} 
                    alt={description} />
            </div>
            <div className='card-footer'>
                <div className='card-metadata'>
                    <img src={OutHeart} alt='Likes' />
                    {likes.length > 1 ? 
                        <h3>{likes.length} pessoas gostaram</h3> : likes.length === 1 ?
                        <h3>1 pessoa gostou</h3> : null  
                    }
                </div>
                <div className='card-info'>
                    <p><a href='/feed' >Nome do Usuário</a> {description}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedCard
