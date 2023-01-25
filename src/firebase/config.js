import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJttckf9s9edO0P7RcjIoNShEyjq3fLvA",
  authDomain: "project-ecommerce-maidana.firebaseapp.com",
  projectId: "project-ecommerce-maidana",
  storageBucket: "project-ecommerce-maidana.appspot.com",
  messagingSenderId: "241540619128",
  appId: "1:241540619128:web:f25beb100612446163468d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// export const auth = getAuth(app)





export const ListProducts = (category)=>{
    const list = collection(db,category)
    return(
      getDocs(list)
      .then((resp)=>{
          const listita = resp.docs.map( (doc) =>{
            return{
              id: doc.id,
              ...doc.data()
            }
          } )
          return listita
      })
    )

  }

