import React from 'react'

function ProfileHeader() {
    return (
        <div className='profile-header'>
            <img className='avatar' src='' alt='avatar' />
            <div className='profile-user-info'>
                <h1>USERNAME</h1>
                <h2>Nome do usuairo</h2>
                <p>Descricao do usuario</p>
                <a href=''>Site</a>
            </div>
        </div>
    )
}

export default ProfileHeader
