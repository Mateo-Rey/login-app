import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMwWEv-muIyCxVLlBOv8FGTb1pIteEY-Q",
  authDomain: "first-login-mr-aef8a.firebaseapp.com",
  projectId: "first-login-mr-aef8a",
  storageBucket: "first-login-mr-aef8a.appspot.com",
  messagingSenderId: "508973050489",
  appId: "1:508973050489:web:29082a2738bc1155d782a8",
};

const connect = () => {
  const app = initializeApp(firebaseConfig);
  return getAuth(app);
};
export const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const auth = connect();
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => alert(err.message));
    if (user) {
      console.log(user);
      setIsLoggedIn(true);
    }
  };

  const handleLogin = async () => {
    const auth = connect();
    const user = signInWithEmailAndPassword(auth, email, password)
    .catch(
      (err) => alert(err.message)
    );
    if (user) {
      console.log(user);
      setIsLoggedIn(true);
    }
  };

  const handleGoogleLogin = async ( ) => {
    const auth = connect()
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth,provider)
        .catch(err => alert(err.message))
    if(user) {
        console.log(user)
        setIsLoggedIn(true)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label for="email">
        Email:
        <input
          name="email"
          type="email"
          placeholder="your-email@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <br />
      <label for="password">
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>&nbsp;
      <button onClick={handleSignUp}>Sign Up</button>&nbsp;
      <button onClick={handleGoogleLogin}>Sign in With Google Instead.</button>

    </form>
  );
};
