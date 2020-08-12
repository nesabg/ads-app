import React, { Component } from 'react'
import firebase from '../Firebase'


export const AdContext = React.createContext()

const db = firebase.firestore(); 

class AdContextProvider extends Component {
    state = {
        allAds: []
    }
    createAd = (data) => {
        const dbData = {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        address: data.address,
        author: data.auth.user.name,
        aid: data.auth.user.uid
        }         
        return db.collection('ads').add(dbData)
    }

    updateAd = (data, id) => {
        const dbData = {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        address: data.address
        }         
        return db.collection('ads').doc(id).set(dbData, {merge: true})
    }
    removeContent = (id) => {
        return db.collection('ads').doc(id).delete()
    }

    componentDidMount = () => {
        this.loadContent()
    }

    loadContent = () => {
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
        <AdContext.Provider value={{ ...this.state, createAd: this.createAd, deleteAd: this.removeContent, updateAd: this.updateAd }}>
          {this.props.children}
        </AdContext.Provider>
      );
    }
  }
   
  export default AdContextProvider;

