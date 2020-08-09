import React, { Component } from 'react'
import firebase from '../Firebase'


export const AdContext = React.createContext()

const db = firebase.firestore(); 

class AdContextProvider extends Component {
    state = {
        allAds: []
    }

    // login = (userData) => {
    //     firebase.auth().signInWithEmailAndPassword(userData.email, userData.password).then( data => {
    //        db.collection('users').doc(data.user.uid).onSnapshot(res => {
    //         this.setState( { ...this.state, user: res.data()} )
    //        })
    //     }).catch(e => {
    //         console.error(e)
    //         alert(e.message)
    //     })       
    // }
// /{ title, address, description, imageUrl, auth }

    createAd = (data) => {
        const dbData = {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        address: data.address,
        author: data.auth.user.name,
        }         
        db.collection('ads').add(dbData).then((res) => {
            this.props.history.push('/')
        })
    }

    componentDidMount = () => {
        db.collection('ads').onSnapshot( snap => {
            let ads = [];
            snap.forEach(doc => {
                let data = doc.data()
                data.uid = doc.id
                ads.push(data)
            })
            this.setState( { ...this.state,  allAds: ads } )
        })
    }

    render() { 
      return (
        <AdContext.Provider value={{ ...this.state, createAd: this.createAd, }}>
          {this.props.children}
        </AdContext.Provider>
      );
    }
  }
   
  export default AdContextProvider;

