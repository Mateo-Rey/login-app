import { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { SecretStuff } from './components/SecretStuff.jsx'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <>
    <header>
      <h1>My First Login</h1>
    </header>
    {isLoggedIn
      ? <SecretStuff />
      : <Login setIsLoggedIn={setIsLoggedIn} />
    }
    </>
  );
}

export default App;
