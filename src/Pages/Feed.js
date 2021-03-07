import React from 'react'
import BottonNav from '../Components/BottonNav'
import HeaderNav from '../Components/HeaderNav'

function Feed() {
    return (
        <>
            <HeaderNav />
            <div className='card-container'>
                <div className='card-header'>
                    <img src='' alt='Foto de perfil' />
                    <h2>Perfil do Usuário</h2>
                </div>
                <div className='card-photo'>
                    <img src='' alt='imagem' />
                </div>
                <div className='card-footer'>
                    <div className='card-metadata'>
                        <img src='' alt='Likes' />
                        <h3>43 pessoas gostaram</h3>
                    </div>
                    <div className='card-info'>
                        <p><a href='/feed' >Nome do Usuário</a> Está é adescrição</p>
                    </div>
                </div>
            </div>
            <BottonNav />
        </>
    )
}

export default Feed
