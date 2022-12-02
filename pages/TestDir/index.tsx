import {getApp,FirebaseApp} from "firebase/app"

import "../../libs/firebase/init"

export default function Test (){
    const app : FirebaseApp = getApp()
    return (
        <>
            <ul>
                <li>name = {app.name}</li>
                <li>appId = {app.options.appId}</li>
                <li>apiKey = {app.options.apiKey}</li>
            </ul>
        </>
    )
}