import React, { useContext } from 'react'
import Login from '../auth/Login'
import { AuthContext } from '../../contexts/AuthContext'

const Home = () => {
    const auth = useContext(AuthContext)
    return (
        <div className="home">
            <h1>This is home</h1>
            <p>Lorem ipsum dolor ist</p>
            <p>From home component: {auth.user.name}</p>
            <Login />
        </div>
    )
}

export default Home


