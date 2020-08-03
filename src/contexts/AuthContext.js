import React, { Component } from 'react'
import firebase from '../Firebase'


export const AuthContext = React.createContext()

const db = firebase.firestore(); 

class AuthContextProvider extends Component {
    state = {
        isLoggedIn: null,
        user: {
            name: 'Gosho',
            description: '',
            email: 'gosho@gosho.bg',
            imageUrl: 'https://www.redditstatic.com/avatars/avatar_default_01_008985.png'
        }
    }

    login = (userData) => {
        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then( data => {
           db.collection('users').doc(data.user.uid).onSnapshot(res => {
            this.setState( { ...this.state, user: res.data()} )
           })
        }).catch(e => {
            console.error(e)
            alert(e.message)
        })       
    }

    register = (userData) => {
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then( data => {
          const dbData = {
            uid: data.user.uid,
            email: userData.email,
            name: userData.name,
            description: userData.description,
            imageUrl: userData.imageUrl
          }         
          db.doc(`users/${data.user.uid}`).set(dbData, { merge: true }).then(res => console.log(res)).catch(e => console.error(e))
        }).catch(e => {
            console.error(e)
            alert(e.message)
        })
        this.setState( { ...this.state, user: userData} )
    }

    render() { 
      return (
        <AuthContext.Provider value={{ ...this.state, login: this.login, register: this.register }}>
          {this.props.children}
        </AuthContext.Provider>
      );
    }
  }
   
  export default AuthContextProvider;

