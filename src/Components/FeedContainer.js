import React, { useEffect, useState } from 'react'

import api from '../Services/api'

import FeedCard from './FeedCard'

function FeedContainer() {
    const [allPosts, setAllPosts] = useState(null)
    const [postInteraction, setPostInteraction] = useState(false)

    function interaction() {
        setPostInteraction(!postInteraction)
    }

    useEffect(() => {
        async function getAllPosts() {
            try {
                const loadedPosts = await api.get('posts')
                const { data } = loadedPosts
                setAllPosts(data.data.reverse())
            } catch(err) {
                alert('Não foi possivel carregar os posts!')
            }
        }
        getAllPosts()
    },[postInteraction])

    
    return (
        <>  
            {allPosts === null && <h1 className='loading-feed'>Carregando...</h1> }
            {allPosts && allPosts.map(post => (
                <FeedCard 
                    key={post._id} 
                    id={post._id}
                    picture={post.picture} 
                    description={post.description}
                    likes={post.likes}
                    user={post.user}
                    interaction={interaction}
                    />
            ))}
           
        </>
        
    )
}

export default FeedContainer
