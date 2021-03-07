import React from 'react'

import FillHeart from '../Assets/heart-red.svg'
import OutHeart from '../Assets/heart.svg'

function FeedContainer() {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <img src='https://avatars.githubusercontent.com/u/53240060?s=460&u=1b76a884bd6514d9c0d3eb42976bb9bc820b7ca1&v=4' alt='Foto de perfil' />
                <h2>Perfil do Usuário</h2>
            </div>
            <div className='card-photo'>
                <img src='https://th.bing.com/th/id/OIP.AzB5n-WC8zs5yXaOMEwueAHaE7?w=244&h=180&c=7&o=5&pid=1.7' alt='imagem' />
            </div>
            <div className='card-footer'>
                <div className='card-metadata'>
                    <img src={OutHeart} alt='Likes' />
                    <h3>43 pessoas gostaram</h3>
                </div>
                <div className='card-info'>
                    <p><a href='/feed' >Nome do Usuário</a> Está é adescrição</p>
                </div>
            </div>
        </div>
    )
}

export default FeedContainer
