import React from 'react'
import BottonNav from '../Components/BottonNav'
import HeaderNav from '../Components/HeaderNav'
import PostContainer from '../Components/PostContainer'

function Post({ clearUserId }) {
    return (
        <>
            <HeaderNav clearUserId={clearUserId} />
            <PostContainer />
            <BottonNav />
        </>
    )
}

export default Post
