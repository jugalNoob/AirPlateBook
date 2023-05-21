


import React,{ createContext, useReducer} from 'react'

import { Route } from 'react-router-dom'

import Home from "./page/Home"
import Air from './page/Air'
import Form from './page/Form'
import Login from './page/Login'
import Logout from "./page/Logout"


import { initialState ,reducer } from "../src/reducer/UserReducer"
export const UserContext=createContext()

function App() {
  const [state , dispatch]=useReducer(reducer , initialState)

  return (
    <div>
  <UserContext.Provider value={{state , dispatch}}>
 
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/air">
        <Air/>
      </Route>

      <Route path="/form">
        <Form/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/logout">
        <Logout/>
      </Route>
      </UserContext.Provider>
    </div>
  )
}

export default App