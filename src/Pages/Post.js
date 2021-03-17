import React from 'react'
import BottonNav from '../Components/BottonNav'
import HeaderNav from '../Components/HeaderNav'

function Post({ clearUserId }) {
    return (
        <>
            <HeaderNav clearUserId={clearUserId} />
            <h1>Post</h1>
            <BottonNav />
        </>
    )
}

export default Post
