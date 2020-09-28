import React, {createContext, useState} from 'react'
import {auth, db, storage} from '../config/config';
import firebase from 'firebase'
export const Context = createContext();

const ContextProvider = props => {
    const [model, setModel] = useState(false)
    const [user, setuser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [posts, setposts] = useState([])
    //open Moddel
    const openModel = () => {
        setModel(true);
    } 
    //close model
    const closeModel = () => {
        setModel(false)
    }
    //register
    const register = async user => {
        const {
            username,
            email,
            password
        } = user
        try {
            const response = await auth.createUserWithEmailAndPassword(email, password);
            response.user.updateProfile({
                displayName: username
            })

        } catch (error) {
            console.log(error);
        }
    }
    //login
    const login = async user => {
        const {email, password} = user;
        const response = await auth.signInWithEmailAndPassword(email, password)
    }
    //logout
    const logout  = () => {
        auth.signOut().then(() => setuser(null)).catch(error => console.log(error))
    }
    //useeffect
    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            setuser(user)
            setLoader(false)
        })
        db.collection('posts').orderBy('currentTime', 'desc').onSnapshot(snp => {
            setposts(
                snp.docs.map(doc => 
                    ({
                        id: doc.id,
                        username: doc.data().username,
                        image: doc.data().image,
                        title: doc.data().title

                    }))
            )
        })
    }, [])
    console.log('user', user);
    //create
    const create = data => {
        const {status, image} = data;

        const upload = storage.ref(`images/${image.name}`).put(image);

        upload.on(
            'state_changed',
            (snp) => {
                let progress = (snp.bytesTransferred / snp.totalBytes) * 100
                console.log(progress);
            }, (err) => {
                console.log(err);
            }, () => {
                storage.ref('images').child(image.name).getDownloadURL()
                    .then((url) => {
                        db.collection('posts').add({
                            username: user.displayName,
                            image: url,
                            title: status,
                            currentTime: firebase.firestore.FieldValue.serverTimestamp()
                        })
                    })  
            }
        )


    }
    //commenter
    const puplishComment = data => {
        const {id, comment} = data;
        db.collection('posts').doc(id).collection('comments').add({
            username: user.displayName,
            comment,
            currentTime: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return (
        <Context.Provider value = {
            {
                model,
                openModel,
                closeModel,
                register, 
                login,
                user,
                loader,
                logout,
                create,
                posts,
                puplishComment
            }
        }>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
