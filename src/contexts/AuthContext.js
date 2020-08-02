import React, { Component } from 'react'
import firebase from '../Firebase'


export const AuthContext = React.createContext()

class AuthContextProvider extends Component {
    state = {
        isLoggedIn: null,
        user: {
            name: 'Gosho',
            age: 100,
            email: 'gosho@gosho.bg'
        }
    }

    login = (userData) => {
        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then( data => {
            console.log(data.user.uid)
        }).catch(e => {
            console.error(e)
            alert(e.message)
        })
        this.setState( { ...this.state, user: userData} )
    }

    render() { 
      return (
        <AuthContext.Provider value={{ ...this.state, login: this.login }}>
          {this.props.children}
        </AuthContext.Provider>
      );
    }
  }
   
  export default AuthContextProvider;