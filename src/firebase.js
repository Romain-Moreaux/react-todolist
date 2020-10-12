import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBfL5UaUOs6mp92jryOhKaq2bTg-vd7cRA',
  authDomain: 'react-todolist-e87a5.firebaseapp.com',
  databaseURL: 'https://react-todolist-e87a5.firebaseio.com',
  projectId: 'react-todolist-e87a5',
  storageBucket: 'react-todolist-e87a5.appspot.com',
  messagingSenderId: '695289654211',
  appId: '1:695289654211:web:709f1a8caaeebb8b922b76',
})

export { firebaseConfig as firebase }
