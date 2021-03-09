import React, { useEffect, useState } from 'react'

import api from '../Services/api'

import FeedCard from './FeedCard'

function FeedContainer() {
    const [allPosts, setAllPosts] = useState(null)
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
            {allPosts === null && <h1 className='loading-feed'>Carregando...</h1> }
            {allPosts && allPosts.map(post => (
                <FeedCard 
                    key={post._id} 
                    picture={post.picture} 
                    description={post.description}
                    />
            ))}
           
        </>
        
    )
}

export default FeedContainer
