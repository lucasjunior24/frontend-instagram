import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Feed from '../Pages/Feed'
import Post from '../Pages/Post'
import Profile from '../Pages/Profile'

function Router() {
    const [userId, setUserID] = useState(localStorage.getItem('InstagramUserId'))
    console.log(userId)

    function updateUserId(user) {
        setUserID(user)
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    { userId ? <Redirect to='/feed' /> : <Login updateUserId={updateUserId} /> }
                </Route>
                <Route path='/register' >
                    { userId ? <Redirect to='/feed' /> : <Register /> }
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
