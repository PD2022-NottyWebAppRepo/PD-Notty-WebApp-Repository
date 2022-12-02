import {initializeApp} from "firebase/app"
import {getAnalytics} from "firebase/analytics"

export const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGEINGSENDER,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
}

export const FirebaseApp = initializeApp(config)
//const analytics = getAnalytics(FirebaseApp)



