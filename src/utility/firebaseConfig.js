import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { FIREBASE_API } from '@/constants/firebaseInfo.js'

const firebaseConfig = {
  apiKey: FIREBASE_API.KEY,
  authDomain: 'webgame-2558d.firebaseapp.com',
  projectId: 'webgame-2558d',
  storageBucket: 'webgame-2558d.firebasestorage.app',
  messagingSenderId: '935813143020',
  appId: '1:935813143020:web:074458fa417816be7ac8c9',
}

const app = initializeApp(firebaseConfig)

export { app as firebaseApp }
