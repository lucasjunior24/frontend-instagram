import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Feed from '../Pages/Feed'
import Post from '../Pages/Post'
import Profile from '../Pages/Profile'

function Router() {
    const [userId, setUserId] = useState(localStorage.getItem('InstagramUserId'))
    console.log(userId)
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Login />
                </Route>
                <Route path='/register' >
                    <Register />
                </Route>
                <Route path='/feed' >
                    { userId ? <Feed /> : <Redirect to='/' /> }
                </Route>
                <Route path='/post' >
                    <Post />
                </Route>
                <Route path='/profile' >
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
