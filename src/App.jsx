import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header.js'
import Homepage from './components/homepage.js'
import UserProfile from './components/user.js'
import Details from './components/details.js'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path ="/user">
                    <UserProfile />
                </Route>
                <Route path ="/details/:id">
                    <Details />
                </Route>
                <Route path ="/">
                    <Homepage />
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App