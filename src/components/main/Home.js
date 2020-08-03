import React, { useContext } from 'react'
import Login from '../auth/Login'
import { AuthContext } from '../../contexts/AuthContext'
// import Register from '../auth/Register'

const Home = () => {
    const auth = useContext(AuthContext)
    return (
        <div className="home">
            <h1>This is home</h1>
            <p>Lorem ipsum dolor ist</p>
            <p>From home component: {auth.user.name}</p>
            <img src={auth.user.imageUrl} alt="user avatar" />
            <Login />
            {/* <Register /> */}
        </div>
    )
}

export default Home


