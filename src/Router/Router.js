import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Feed from '../Pages/Feed'
import Post from '../Pages/Post'
import Profile from '../Pages/Profile'

function Router() {
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
                    <Feed />
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
