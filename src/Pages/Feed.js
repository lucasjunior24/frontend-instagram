import React from 'react'

import BottonNav from '../Components/BottonNav'
import HeaderNav from '../Components/HeaderNav'
import FeedContainer from '../Components/FeedContainer'

function Feed({ clearUserId }) {
    return (
        <>
            <HeaderNav clearUserId={clearUserId} />
            <FeedContainer />
            <BottonNav />
        </>
    )
}

export default Feed
