import React, { Component } from 'react'
import firebase from '../Firebase'


export const AuthContext = React.createContext()

const db = firebase.firestore(); 

class AuthContextProvider extends Component {
    state = {
        isLoggedIn: false,
        user: {
            name: 'Gosho',
            description: '',
            aid: 123,
            email: 'gosho@gosho.bg',
            imageUrl: 'https://www.redditstatic.com/avatars/avatar_default_01_008985.png'
        }
    }

    login = (userData) => {
        return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then( data => {
           db.collection('users').doc(data.user.uid).onSnapshot(res => {
            this.setState( { ...this.state, user: res.data(), isLoggedIn: true} )
           })
        }).catch(e => {
            console.error(e)
            alert(e.message)
        })       
    }

    logout = () => {
      return firebase.auth().signOut().then(res => {
        this.setState( {...this.state, isLoggedIn: false })
      })
    }

    register = (userData) => {
        return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then( data => {
          const dbData = {
            uid: data.user.uid,
            email: userData.email,
            name: userData.name,
            description: userData.description,
            imageUrl: userData.imageUrl
          }         
          
          db.doc(`users/${data.user.uid}`)
            .set(dbData, { merge: true })
            .then(res => console.log(res))
            .catch(e => console.error(e))

          this.login(userData)
        }).catch(e => {
            console.error(e)
            alert(e.message)
        })
    }

    render() { 
      return (
        <AuthContext.Provider value={{ ...this.state, login: this.login, register: this.register, logout: this.logout }}>
          {this.props.children}
        </AuthContext.Provider>
      );
    }
  }
   
  export default AuthContextProvider;

