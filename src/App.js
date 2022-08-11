import { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { SecretStuff } from './components/SecretStuff.jsx'

function App() {
  const [isLogged,setIsLogged] = useState(false);
  return (
    <>
    <header>
      <h1>My First Login</h1>
    </header>
    {isLogged
      ? <SecretStuff />
      : <Login setIsLogged={setIsLogged} />
    }
    </>
  );
}

export default App;
