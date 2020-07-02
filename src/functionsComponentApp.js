import React from 'react';
// import './App.css';
import {useDispatch,useSelector} from 'react-redux';


/**
 * @source https://reduxjs.org
 * Redux -> state Management
 * Store : Sumur Semua State Global
 * Action : Tindakan yang akan dilakukan
 * Dispatch : Memilih action mana yang akan di eksekusi
 * Reducer : Eksekusinya
 * Provider : Provide state ke react component
 * Curying
 */

function TodoLists() {

    let todoRef;
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const _handleNewTodo = (e) => {
        e.preventDefault();
        let newTodo = todoRef.value;
        dispatch({
            type: 'ADD TODO',
            todo:newTodo
        })

        todoRef.value = '';
        console.log(todos);
    }

    return (

        <div className="App">
            <h1>Todo List</h1>
            <form onSubmit={_handleNewTodo}>
                <label>New Todo </label>
                <input ref={input => todoRef = input}/>
            </form>
            <ul> {todos.map((item,index) =><li key={index}>{item}</li>)}</ul>

        </div>
    )
}


export default TodoLists;