import React from 'react';
import './App.css';
import {connect} from 'react-redux';


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

class TodoLists extends React.Component {

    todoRef = React.createRef();

    _handleNewTodo = (e) => {
        e.preventDefault();
        let newTodo = this.todoRef.current.value;
        this.props.addNewTodo(newTodo);

        this.todoRef.current.value = '';
    }


    render() {
        const {todos} = this.props;

        return (
            <div className="App">
                <h1>Todo List</h1>
                <form onSubmit={this._handleNewTodo}>
                    <label>New Todo </label>
                    <input ref={this.todoRef}/>
                </form>
                <ul> {todos.map((item,index) =><li key={index}>{item}</li>)}</ul>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    addNewTodo: todo => dispatch({type: 'ADD TODO',todo})
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
