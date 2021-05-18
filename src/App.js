import logo from './logo.svg';
import './App.css';

import firebase from './firebase'
import { useState } from 'react';
import { TodoList } from './TodoList';

function App() {
    const [user, setUser] = useState(null)
    

    async function loginGoogle() {
        const provedor = new firebase.auth.GoogleAuthProvider()
        let resultado = await firebase.auth().signInWithPopup(provedor)
        if(resultado) {
            let novousuario = {
                id : resultado.user.uid,
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
                <TodoList uid={user.id} />
            </div>
        );
    }
}

export default App;
