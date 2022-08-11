import { useState } from "react"
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyDMwWEv-muIyCxVLlBOv8FGTb1pIteEY-Q",
    authDomain: "first-login-mr-aef8a.firebaseapp.com",
    projectId: "first-login-mr-aef8a",
    storageBucket: "first-login-mr-aef8a.appspot.com",
    messagingSenderId: "508973050489",
    appId: "1:508973050489:web:29082a2738bc1155d782a8"
  };
export const Login = ({ setIsLogged }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    function onSubmit(e) {
        e.preventDefault()
        const handleSignUp= () => { 
            const app = initializeApp(firebaseConfig)
            
        }
    }
    return (

        <form onSubmit={onSubmit}>
            <label for='email'>
                Email:
                <input name='email' type='email' placeholder="your-email@gmail.com" required value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </label>
            <br/>
            <label for='password'>
                Password:
                <input name='password' type='password' required value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
            </label>
            <br/>
            <button>Sign Up</button>
        </form>

    )
}