import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE61VxuOLZH_VWRTYab03uiHx1IfXa_aE",
    authDomain: "appme-ce0f5.firebaseapp.com",
    databaseURL: "https://appme-ce0f5.firebaseio.com",
    projectId: "appme-ce0f5",
    storageBucket: "appme-ce0f5.appspot.com",
    messagingSenderId: "1065293366976",
    appId: "1:1065293366976:web:f38464f794ceaab6f98f25",
    measurementId: "G-VZNDX186C5"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

export {db, storage, auth}