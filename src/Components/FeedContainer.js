import React, { useEffect, useState } from 'react'

import api from '../Services/api'

import FeedCard from './FeedCard'

function FeedContainer() {
    const [allPosts, setAllPosts] = useState([])
    console.log(allPosts)
    useEffect(() => {
        async function getAllPosts() {
            try {
                const loadedPosts = await api.get('posts')
                const { data } = loadedPosts
                setAllPosts(data.data)
            } catch(err) {
                alert('Não foi possivel carregar os posts!')
            }
        }
        getAllPosts()
    },[])

    
    return (
        <>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </>
        
    )
}

export default FeedContainer
