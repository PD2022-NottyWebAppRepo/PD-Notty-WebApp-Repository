import {collection,getDocs,getFirestore} from "firebase/firestore"
import "../../libs/firebase/init"

export type User = {
    id: string,
    name : string,
    age : number
}

export async function getUsers():Promise<User[]>{
    const users = new Array<User>()
    const db = getFirestore()
    const UserSnapshot = await getDocs(collection(db,"/person"))

    UserSnapshot.forEach((doc) => {
        const user = doc.data() as User
        users.push({...user,id: doc.id})
    })
    return users
}

