import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBM4pjNDDsENj6PuDc_Xwq2eng1mG56Fq8",
  authDomain: "investor-88bd0.firebaseapp.com",
  projectId: "investor-88bd0",
  storageBucket: "investor-88bd0.appspot.com",
  messagingSenderId: "911171592516",
  appId: "1:911171592516:web:11d6ca0c725d2b585f3711",
  measurementId: "G-6MJLP75TV7"
};
  export const Firebase= firebase.initializeApp(firebaseConfig)//named export