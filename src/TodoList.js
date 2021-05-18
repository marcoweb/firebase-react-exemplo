import { useState, useEffect } from "react";
import firebase from './firebase'

export function TodoList({uid}) {
    const [todos, setTodos] = useState([])

    function loadItems() {
        //firebase.firestore().collection("todos").where('uid', '==', uid).get().then((querySnapshot) => {
            firebase.firestore().collection("todos").where('uid', '==', uid).get().then((querySnapshot) => {
            const todoItems = []
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data()['text']);
                todoItems.push({id: doc.id, text: doc.data()['text'], isCompleted: doc.data()['isCompleted']})
            });
            setTodos(todoItems)
        });
    }

    useEffect(() => {
        loadItems()
    })

    return (
        <div>
            <p>{uid}</p>
            {
                todos.map((t, index) =>(
                    <p>{t.text}</p>
                ))
            }
        </div>

    )
}