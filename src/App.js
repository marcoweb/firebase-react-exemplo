import logo from './logo.svg';
import './App.css';

import firebase from './firebase'
import { useState } from 'react';

function App() {
    const [user, setUser] = useState(null)

    async function loginGoogle() {
        const provedor = new firebase.auth.GoogleAuthProvider()
        let resultado = await firebase.auth().signInWithPopup(provedor)
        if(resultado) {
            let novousuario = {
                id : resultado.user.id,
                name : resultado.user.displayName
            }

            setUser(novousuario)
        } else {
            alert('Erro')
        }
    }

    if(user == null) {
        return (
            <div className="App">
            <h1>Login</h1>
            <button type="button" onClick={loginGoogle}>Login Google</button>
            </div>
        );
    } {
        return (
            <div className="App">
                <h1>Logado</h1>
                <h3>Usuário: {user.name}</h3>
            </div>
        );
    }
}

export default App;
