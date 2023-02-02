import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useState, useEffect } from 'react'


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

export const auth = getAuth(app)

// CREAR USUARIO
export const CreateUser = (values) => {
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

// ACCEDER 
export const AccountLogin = (values, log, setError) => {
  signInWithEmailAndPassword(auth, values.email, values.currentPassword)
    .then(data => {
      if (data.operationType = "signIn") return log(data.user.email)
      console.log(data)
    })
    .catch((e) => {
      if (e.code == 'auth/wrong-password') return setError({ error: true, msj: 'Usuario o Contraseña incorrectos.' })
      if (e.code == 'auth/too-many-requests') return setError({ error: true, msj: 'Demasiados intentos, intentelo mas tarde...' })
      console.log(e)
    })
}


const Users = () => {
  const userList = collection(db, 'Usuarios')
  return (
    getDocs(userList)
      .then(list => {
        const users = list.docs.map((user) => {
          return user.data()
        })
        return users
      })
  )
}



// LISTA DE DATA DE USUARIOS
export const DataUserList = () => {
  const [lista, setLista] = useState(false)
  useEffect(() => {
    return async () => {
      const lista = await Users()
      setLista(lista)
    }
  }, [])
  return lista
}


// PRODUCTOS EN FIREBASE

export const ListProducts = (category) => {
  const list = collection(db, category)
  return (
    getDocs(list)
      .then((resp) => {
        const listita = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        return listita
      })
  )

}

