import axios from 'axios'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

export const BUDGET_FILE = 'budget.json'

var app = firebase.initializeApp({
  apiKey: "AIzaSyD4Z4nh5UwBU3zSO_rV1nlVhA_iRklJOXM", // Auth / General Use
  authDomain: "budgetr-dev.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://budgetr-dev.firebaseio.com", // Realtime Database
  storageBucket: "budgetr-dev.appspot.com",          // Storage
  messagingSenderId: "214115862511",                 // Cloud Messaging
  appId: "1:214115862511:web:aad02898f6c3b4aa",
  projectId: "budgetr-dev",
})
firebase.auth(app)
export {firebase}

let userStorageRef
let userId
export function storageRef (uid) {
  userId = uid
  if (userStorageRef) return userStorageRef

  userStorageRef = firebase.storage().ref().child(`user/${uid}`)
  return userStorageRef
}

let budgetFileRef
export function budgetRef (uid) {
  if (budgetFileRef) return budgetFileRef

  if (userStorageRef) { 
    budgetFileRef = userStorageRef.child(BUDGET_FILE)
    return budgetFileRef
  }
  
  return storageRef(uid).child(BUDGET_FILE)
}

// Configure FirebaseUI.
export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
    firebase.auth.PhoneAuthProvider.PHONE_SIGN_IN_METHOD,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
}

export function downloadBudgetData (uid, callback) {
  budgetRef(uid).getDownloadURL().then(async url => {
    let resp = await axios.get(url)
    callback(resp.data)
  })
}

export function uploadBudgetData (jsonData) {
  budgetRef(userId).putString(JSON.stringify(jsonData))
}