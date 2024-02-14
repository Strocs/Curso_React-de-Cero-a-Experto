// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD81OYRsUJLpwpsns4lsB1LzBqceF3oHEE',
  authDomain: 'react-journalapp-6ccf4.firebaseapp.com',
  projectId: 'react-journalapp-6ccf4',
  storageBucket: 'react-journalapp-6ccf4.appspot.com',
  messagingSenderId: '12718865860',
  appId: '1:12718865860:web:fd1f0c912b6fbb3be97891'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
